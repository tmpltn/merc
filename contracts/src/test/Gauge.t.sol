// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "ds-test/test.sol";
import "../Gauge.sol";
import "./MockMerc.sol";
import "./MockERC20.sol";
import "./CheatCodes.sol";

import {ERC721TokenReceiver} from "solmate/tokens/ERC721.sol";

contract GaugeTest is DSTest, ERC721TokenReceiver {
    CheatCodes cheats = CheatCodes(HEVM_ADDRESS);
    MockERC20 token;
    MockMerc merc;
    Gauge gauge;

    function setUp() public {
        token = new MockERC20();
        token.mint(address(this), 1e30);
        merc = new MockMerc();
        merc.mint(address(this), 1e30);
        gauge = new Gauge(merc);
    }

    function testInitialValues() public {
        assertEq(gauge.mintPrice(), 1e18);
    }

    function testRevertsPledgeNotFound() public {
        // cheats.expectRevert(abi.encodeWithSignature("NotFound()"));
        // gauge.pledge(10, 1000);
    }

    function testRevertsBurnNotFound() public {
        cheats.expectRevert(abi.encodeWithSignature("NotFound()"));
        gauge.burn(10, 1000);
    }

    function testMint() public {
        uint256 gaugeId = _mintedGauge();
        assertEq(gauge.ownerOf(gaugeId), address(this));
        assertEq(gauge.weightOf(gaugeId), 1e18);
        assertEq(gauge.mintPrice(), 2e18);
    }

    function testRecycle() public {
        uint256 gaugeId = _mintedGauge();
        PledgedMerc oldpMerc = gauge.pMercForGauges(gaugeId);
        MockERC20 newToken = new MockERC20();
        uint256 newGaugeId = gauge.recycle(gaugeId, newToken);

        cheats.expectRevert(bytes("ERC721: owner query for nonexistent token"));
        gauge.ownerOf(gaugeId);
        assertEq(gauge.weightOf(gaugeId), 0);
        assertEq(gauge.ownerOf(newGaugeId), address(this));
        assertEq(gauge.weightOf(newGaugeId), 1e18);

        merc.approve(address(oldpMerc), 1);
        cheats.expectRevert(abi.encodeWithSignature("DeactivatedGauge()"));
        oldpMerc.deposit(1, address(this));

        cheats.expectRevert(abi.encodeWithSignature("DeactivatedGauge()"));
        gauge.burn(gaugeId, 1);
    }

    function testCannotPledgeToRecycledGauge() public {
        uint256 gaugeId = _mintedGauge();
        PledgedMerc oldpMerc = gauge.pMercForGauges(gaugeId);
        merc.approve(address(oldpMerc), 1);

        MockERC20 newToken = new MockERC20();
        uint256 newGaugeId = gauge.recycle(gaugeId, newToken);

        cheats.expectRevert(abi.encodeWithSignature("DeactivatedGauge()"));
        oldpMerc.deposit(1, address(this));
    }

    function testTokenUri() public {
        uint256 gaugeId = _mintedGauge();
        // TODO
        // console.log(gauge.svgMarkup(gaugeId));
        // console.log(gauge.svgDataURI(gaugeId));
        // console.log(gauge.tokenURI(gaugeId));
    }

    function testPledge() public {
        uint256 gaugeId = _mintedGauge();
        PledgedMerc pMerc = gauge.pMercForGauges(gaugeId);
        merc.approve(address(pMerc), 1000);
        pMerc.deposit(1000, address(this));
        assertEq(gauge.weightOf(gaugeId), 1e18 + 1000);
        assertEq(gauge.pledged(gaugeId, address(this)), 1000);

        pMerc.withdraw(1000, address(this), address(this));
        assertEq(gauge.weightOf(gaugeId), 1e18);
        assertEq(gauge.pledged(gaugeId, address(this)), 0);
    }

    function testBurn() public {
        uint256 gaugeId = _mintedGauge();
        gauge.burn(gaugeId, 1000);
        assertEq(gauge.weightOf(gaugeId), 1e18 + 10000);
        // assertEq(gauge.pledged(gaugeId, address(this)), 0);
    }

    function testStake() public {
        uint256 gaugeId = _mintedGauge();
        uint256 amountToStake = 400e18;

        token.approve(address(gauge), amountToStake);
        gauge.stake(gaugeId, amountToStake);

        assertEq(token.balanceOf(address(gauge)), amountToStake);

        cheats.warp(block.timestamp + 1);

        assertEq(
            (gauge.rewardPerToken(gaugeId) * amountToStake),
            gauge.rewardRate() * gauge.REWARD_PER_TOKEN_PRECISION()
        );
    }

    function testStakeTwoGauges() public {
        uint256 gaugeId = _mintedGauge();
        uint256 gaugeId2 = _mintedGauge();

        uint256 amountToStake1 = 3e18;
        token.approve(address(gauge), amountToStake1);
        gauge.stake(gaugeId, amountToStake1);

        uint256 amountToStake2 = 5e18;
        token.approve(address(gauge), amountToStake2);
        gauge.stake(gaugeId2, amountToStake2);

        cheats.warp(block.timestamp + 1);

        assertEq(
            gauge.rewardPerToken(gaugeId) *
                amountToStake1 +
                gauge.rewardPerToken(gaugeId2) *
                amountToStake2,
            gauge.rewardRate() * gauge.REWARD_PER_TOKEN_PRECISION()
        );

        uint256 expectedClaim = (gauge.rewardPerToken(gaugeId) *
            gauge.staked(gaugeId, address(this))) /
            gauge.REWARD_PER_TOKEN_PRECISION();
        uint256 expectedBalance = merc.balanceOf(address(this)) + expectedClaim;

        uint256 claim = gauge.claimReward(gaugeId);

        assertEq(claim, expectedClaim);
        assertEq(merc.balanceOf(address(this)), expectedBalance);

        cheats.warp(block.timestamp + 10);
    }

    function _mintedGauge() private returns (uint256) {
        merc.approve(address(gauge), type(uint256).max);
        return gauge.mint(address(this), token);
    }
}
