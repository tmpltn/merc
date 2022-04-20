// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.12;

import "openzeppelin/contracts/token/ERC721/ERC721.sol";
import "openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "openzeppelin/contracts/token/ERC20/IERC20.sol";
import "openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "openzeppelin/contracts/proxy/Clones.sol";
import "openzeppelin/contracts/utils/Strings.sol";

import "base64/base64.sol";
import "hot-chain-svg/SVG.sol";
import "./interfaces/IMerc.sol";
import "./PledgedMerc.sol";
import "./StakedToken.sol";
import "./test/console.sol";

contract Gauge is IERC721, ERC721Enumerable {
    using SafeERC20 for IERC20Metadata;
    using SafeERC20 for IMerc;

    error NotFound();
    error OnlyOwner();
    error AmountTooHigh();
    error InvalidStakingToken();
    error DeactivatedGauge();

    event Pledge(uint256 gaugeId, address account, uint256 amount);
    event Depledge(uint256 gaugeId, address account, uint256 amount);
    event Burn(uint256 gaugeId, address account, uint256 amount);
    event Stake(uint256 gaugeId, address account, uint256 amount);
    event Unstake(uint256 gaugeId, address account, uint256 amount);
    event RewardPaid(uint256 gaugeId, address account, uint256 amount);

    // Staking state

    uint256 public constant REWARD_PER_GAUGE_WEIGHT_PRECISION = 1e18;
    uint256 public constant REWARD_PER_TOKEN_PRECISION = 1e36;

    uint256 public rewardRate = 23456789012345678901; // TODO - get this from Merc.
    uint256 public lastUpdateTime;
    uint256 public immutable createTime;
    uint256 public rewardPerGaugeWeightStored;
    uint256 public totalWeight;

    // ERC-721 minting stuff

    uint8 constant BURN_WEIGHT_COEFF = 10;

    IMerc public immutable merc;
    PledgedMerc private immutable defaultPledgedMerc;
    mapping(uint256 => PledgedMerc) public pMercForGauges;
    StakedToken private immutable defaultStakedToken;
    mapping(uint256 => StakedToken) public sTokenForGauges;

    uint256 public tokenCount;
    uint256 public mintPrice;

    struct GaugeStakerState {
        uint256 balance;
        uint256 rewards;
        uint256 userRewardPerTokenPaid;
    }

    struct GaugeState {
        IERC20Metadata stakingToken;
        uint256 totalStaked;
        mapping(address => GaugeStakerState) stakers;
        uint256 weight;
        mapping(address => uint256) pledges;
        uint256 totalPledged;
        uint256 rewardPerWeightPaid;
        uint256 rewards;
        uint256 lastUpdateTime;
        uint256 rewardPerTokenStored;
    }

    mapping(uint256 => GaugeState) public gauges;

    constructor(IMerc _merc) ERC721("Mercenary Gauge", "gMERC") {
        merc = _merc;
        mintPrice = 10**merc.decimals();
        defaultPledgedMerc = new PledgedMerc();
        // economically impossible to mint uint256.max gauges
        defaultPledgedMerc.initialize(Gauge(address(0)), type(uint256).max, IERC20Metadata(address(0)), "", "");

        defaultStakedToken = new StakedToken();
        defaultStakedToken.initialize(Gauge(address(0)), type(uint256).max, IERC20Metadata(address(0)), "", "");
        createTime = block.timestamp;
    }

    function mint(address to, IERC20Metadata stakingToken)
        public
        returns (uint256 id)
    {
        if (address(stakingToken) == address(0)) {
            revert InvalidStakingToken();
        }
        id = tokenCount++;
        merc.safeTransferFrom(msg.sender, address(this), mintPrice);
        merc.burn(mintPrice);

        _safeMint(to, id);
        gauges[id].stakingToken = stakingToken;
        gauges[id].weight = mintPrice;
        gauges[id].lastUpdateTime = block.timestamp;
        totalWeight += mintPrice;
        mintPrice = mintPrice * 2;

        string memory idStr = Strings.toString(id);
        PledgedMerc pMerc = PledgedMerc(Clones.clone(address(defaultPledgedMerc)));
        pMerc.initialize(this, id, merc, string.concat("Pledged Merc Gauge ", idStr), string.concat("pMERC-", idStr));
        pMercForGauges[id] = pMerc;

        StakedToken sToken = StakedToken(Clones.clone(address(defaultStakedToken)));
        sToken.initialize(this, id, stakingToken, string.concat("Merc Gauge ", idStr, " ", stakingToken.name()), string.concat("MG-", idStr, "-", stakingToken.symbol()));
        sTokenForGauges[id] = sToken;

        return id;
    }

    function recycle(uint256 gaugeId, IERC20Metadata stakingToken)
        public
        gaugeExists(gaugeId)
        returns (uint256 id)
    {
        if (ownerOf(gaugeId) != msg.sender) {
            revert OnlyOwner();
        }
        GaugeState storage original = gauges[gaugeId];
        uint256 transferrableWeight = burnedWeightOf(gaugeId);
        // TODO - recycle fee?
        // merc.transferFrom(msg.sender, address(this), recycleFee);

        id = tokenCount++;
        _safeMint(msg.sender, id);
        gauges[id].stakingToken = stakingToken;
        gauges[id].weight = transferrableWeight;

        original.weight -= transferrableWeight;
        _burn(gaugeId);

        return id;
    }

    ///// PLEDGING + BURNING MERC

    function weightOf(uint256 gaugeId)
        public
        view
        gaugeExists(gaugeId)
        returns (uint256)
    {
        return gauges[gaugeId].weight;
    }

    function burnedWeightOf(uint256 gaugeId) public view returns (uint256) {
        GaugeState storage g = gauges[gaugeId];
        return g.weight - g.totalPledged;
    }

    function pledge(uint256 gaugeId, uint256 amount, address who)
        public
        gaugeExists(gaugeId)
        gaugeActive(gaugeId)
        updateGaugeReward(gaugeId)
    {
        require(msg.sender == address(pMercForGauges[gaugeId]), "Gauge: invalid sender");
        GaugeState storage g = gauges[gaugeId];
        g.pledges[who] += amount;
        g.weight += amount;
        g.totalPledged += amount;
        totalWeight += amount;

        merc.safeTransferFrom(msg.sender, address(this), amount);

        emit Pledge(gaugeId, who, amount);
    }

    function pledged(uint256 gaugeId, address account)
        public
        view
        returns (uint256)
    {
        GaugeState storage g = gauges[gaugeId];
        return g.pledges[account];
    }

    function depledge(uint256 gaugeId, uint256 amount, address who)
        public
        gaugeExists(gaugeId)
        updateGaugeReward(gaugeId)
    {
        require(msg.sender == address(pMercForGauges[gaugeId]), "Gauge: invalid sender");
        GaugeState storage g = gauges[gaugeId];
        if (amount > g.pledges[who]) {
            revert AmountTooHigh();
        }
        g.pledges[who] -= amount;
        g.weight -= amount;
        g.totalPledged -= amount;
        totalWeight -= amount;

        merc.safeTransfer(msg.sender, amount);

        emit Depledge(gaugeId, who, amount);
    }

    function burn(uint256 gaugeId, uint256 amount)
        public
        gaugeExists(gaugeId)
        gaugeActive(gaugeId)
        updateGaugeReward(gaugeId)
    {
        GaugeState storage g = gauges[gaugeId];
        uint256 w = amount * BURN_WEIGHT_COEFF;
        g.weight += w;
        totalWeight += w;

        merc.transferFrom(msg.sender, address(this), amount);
        merc.burn(amount);
        emit Burn(gaugeId, msg.sender, amount);
    }

    function stake(uint256 gaugeId, uint256 amount, address who)
        public
        gaugeExists(gaugeId)
        updateStakingReward(gaugeId, who)
    {
        GaugeState storage g = gauges[gaugeId];

        g.totalStaked += amount;
        g.stakers[who].balance += amount;
        g.stakingToken.safeTransferFrom(msg.sender, address(this), amount);
        emit Stake(gaugeId, who, amount);
    }

    function totalStaked(uint256 gaugeId) public view returns (uint256) {
        return gauges[gaugeId].totalStaked;
    }

    function staked(uint256 gaugeId, address account)
        public
        view
        returns (uint256)
    {
        return gauges[gaugeId].stakers[account].balance;
    }

    function unstake(uint256 gaugeId, uint256 amount, address who)
        public
        gaugeExists(gaugeId)
        updateStakingReward(gaugeId, who)
    {
        GaugeState storage g = gauges[gaugeId];

        if (amount > g.stakers[who].balance) {
            revert AmountTooHigh();
        }

        g.totalStaked -= amount;
        g.stakers[who].balance -= amount;
        g.stakingToken.safeTransfer(msg.sender, amount);
        emit Unstake(gaugeId, who, amount);
    }

    /// @notice Returns the amount that would be claimable if claimed in this block
    /// @param gaugeId a parameter just like in doxygen (must be followed by parameter name)
    /// @return  claimable value
    function claimable(uint256 gaugeId)
        public
        view
        gaugeExists(gaugeId)
        returns (uint256)
    {
        GaugeState storage g = gauges[gaugeId];
        return
            (g.stakers[msg.sender].rewards +
                g.stakers[msg.sender].balance *
                rewardPerToken(gaugeId)) / REWARD_PER_TOKEN_PRECISION;
    }

    function claimReward(uint256 gaugeId)
        public
        gaugeExists(gaugeId)
        updateStakingReward(gaugeId, msg.sender)
        returns (uint256)
    {
        GaugeState storage g = gauges[gaugeId];

        uint256 reward = g.stakers[msg.sender].rewards;
        if (reward != 0) {
            g.stakers[msg.sender].rewards = 0;
            merc.mint();
            merc.transfer(msg.sender, reward);
            emit RewardPaid(gaugeId, msg.sender, reward);
        }
        return reward;
    }

    /// Weight rewards per gauge

    function rewardPerGaugeWeight() public view returns (uint256) {
        if (totalWeight == 0) {
            return rewardPerGaugeWeightStored;
        }
        return
            rewardPerGaugeWeightStored +
            ((rewardRate *
                (block.timestamp - lastUpdateTime) *
                REWARD_PER_GAUGE_WEIGHT_PRECISION) / totalWeight);
    }

    function gaugeEarned(uint256 gaugeId) public view returns (uint256) {
        GaugeState storage g = gauges[gaugeId];

        return
            ((g.weight * (rewardPerGaugeWeight() - g.rewardPerWeightPaid)) /
                REWARD_PER_GAUGE_WEIGHT_PRECISION) + g.rewards;
    }

    function _updateGaugeReward(uint256 gaugeId) private {
        GaugeState storage g = gauges[gaugeId];

        rewardPerGaugeWeightStored = rewardPerGaugeWeight();
        lastUpdateTime = block.timestamp;
        g.rewards = gaugeEarned(gaugeId);
        g.rewardPerWeightPaid = rewardPerGaugeWeightStored;
    }

    modifier updateGaugeReward(uint256 gaugeId) {
        _updateGaugeReward(gaugeId);
        _;
    }

    /// Gauge staking rewards per account

    function rewardPerToken(uint256 gaugeId) public view returns (uint256) {
        GaugeState storage g = gauges[gaugeId];
        if (g.totalStaked * totalWeight == 0) {
            return g.rewardPerTokenStored;
        }
        uint256 gaugeRewardRate = (rewardRate *
            g.weight *
            REWARD_PER_TOKEN_PRECISION) / totalWeight;
        return
            g.rewardPerTokenStored +
            (gaugeRewardRate * (block.timestamp - g.lastUpdateTime)) /
            g.totalStaked;
    }

    function earned(uint256 gaugeId, address account)
        public
        view
        returns (uint256)
    {
        GaugeState storage g = gauges[gaugeId];
        return
            ((g.stakers[account].balance *
                (rewardPerToken(gaugeId) -
                    g.stakers[account].userRewardPerTokenPaid)) /
                REWARD_PER_TOKEN_PRECISION) + g.stakers[account].rewards;
    }

    modifier updateStakingReward(uint256 gaugeId, address account) {
        _updateGaugeReward(gaugeId);

        GaugeState storage g = gauges[gaugeId];

        g.rewardPerTokenStored = rewardPerToken(gaugeId);
        g.lastUpdateTime = block.timestamp;
        g.stakers[account].rewards = earned(gaugeId, account);
        g.stakers[account].userRewardPerTokenPaid = g.rewardPerTokenStored;

        _;
    }

    //// Token URI + SVG Rendering

    function tokenURI(uint256 gaugeId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        string memory svgData = svgDataURI(gaugeId);
        string memory json = Base64.encode(
            bytes.concat(
                '{"name": "MY NFT", "description": "", "image_data": "',
                bytes(svgData),
                '"}'
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function svgDataURI(uint256 gaugeId) public view returns (string memory) {
        return
            string.concat(
                "data:image/svg+xml;base64,",
                Base64.encode(bytes(svgMarkup(gaugeId)))
            );
    }

    function svgMarkup(uint256 gaugeId) public view returns (string memory) {
        GaugeState storage g = gauges[gaugeId];

        return
            string.concat(
                "<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' style='background:#000'>",
                svg.text(
                    string.concat(
                        svg.prop("x", "20"),
                        svg.prop("y", "40"),
                        svg.prop("font-size", "22"),
                        svg.prop("fill", "white")
                    ),
                    string.concat(svg.cdata("Gauge #"), utils.uint2str(gaugeId))
                ),
                svg.text(
                    string.concat(
                        svg.prop("x", "20"),
                        svg.prop("y", "80"),
                        svg.prop("font-size", "22"),
                        svg.prop("fill", "white")
                    ),
                    string.concat(svg.cdata("Token: "), g.stakingToken.symbol())
                ),
                svg.text(
                    string.concat(
                        svg.prop("x", "20"),
                        svg.prop("y", "120"),
                        svg.prop("font-size", "22"),
                        svg.prop("fill", "white")
                    ),
                    string.concat(
                        svg.cdata("Weight: "),
                        utils.uint2str(g.weight / (10**merc.decimals()))
                    )
                ),
                svg.rect(
                    string.concat(
                        svg.prop("fill", "purple"),
                        svg.prop("x", "20"),
                        svg.prop("y", "150"),
                        svg.prop("width", utils.uint2str(160)),
                        svg.prop("height", utils.uint2str(10))
                    ),
                    utils.NULL
                ),
                "</svg>"
            );
    }

    function _exists(uint256 tokenId) internal view override returns (bool) {
        return address(gauges[tokenId].stakingToken) != address(0);
    }

    modifier gaugeExists(uint256 gaugeId) {
        if (!_exists(gaugeId)) {
            revert NotFound();
        }
        _;
    }

    modifier gaugeActive(uint256 gaugeId) {
        if (!super._exists(gaugeId)) {
            revert DeactivatedGauge();
        }
        _;
    }
}
