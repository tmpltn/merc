/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Renderer, RendererInterface } from "../Renderer";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IGauge",
        name: "_gauge",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gaugeId",
        type: "uint256",
      },
    ],
    name: "dataURISVG",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gauge",
    outputs: [
      {
        internalType: "contract IGauge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gaugeId",
        type: "uint256",
      },
    ],
    name: "svgMarkup",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gaugeId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200277338038062002773833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612677620000fc60003960008181607f0152818161011e015281816101b301528181610ce401528181610eec01528181610f810152818161105701528181611158015281816111db015281816112dd015281816113600152818161146d0152818161155f015281816115ee015281816116d701526117da01526126776000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630a018cb414610051578063a6f19c841461007a578063b3bb7506146100b9578063c87b56dd146100cc575b600080fd5b61006461005f366004611a94565b6100df565b6040516100719190611add565b60405180910390f35b6100a17f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610071565b6100646100c7366004611a94565b610118565b6100646100da366004611a94565b610947565b60606100f26100ed83610118565b6109ab565b6040516020016101029190611b10565b6040516020818303038152906040529050919050565b606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166396c82e576040518163ffffffff1660e01b8152600401602060405180830381865afa15801561017a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019e9190611b55565b60405162ecfa2f60e31b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690630767d17890602401602060405180830381865afa158015610202573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102269190611b55565b61023290612710611b84565b61023c9190611bb9565b9050600061026c61271061025284610104611b84565b61025c9190611bb9565b610267906064611bcd565b610b11565b60405160200161027c9190611be5565b60408051601f19818403018152919052905060006102a261271061025285610104611b84565b6040516020016102b29190611c25565b6040516020818303038152906040529050600060405160200161043e907f3c7376672077696474683d2235303022206865696768743d223530302220766981527f6577426f783d223020302035303020353030222066696c6c3d226e6f6e65222060208201527f786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323030302f737660408201526233911f60e91b6060820152661e39ba3cb6329f60c91b60638201527f2e74657874207b20666f6e742d66616d696c793a206d6f6e6f73706163653b20606a8201527f66696c6c3a2077686974653b20666f6e742d73697a653a2032327078207d0000608a8201527f2e7469746c65207b20666f6e742d73697a653a2032327078207d00000000000060a88201527f2e626f6c64207b20666f6e742d7765696768743a20626f6c64207d000000000060c28201527f2e63617264207b2066696c6c3a2075726c28236772616469656e742920626c6160dd82015263636b207d60e01b60fd820152671e17b9ba3cb6329f60c11b6101018201526101090190565b60405160208183030381529060405290506000836040516020016104629190611c6a565b604051602081830303815290604052905060006106526104bb60405180604001604052806005815260200164636c61737360d81b8152506040518060400160405280600481526020016318d85c9960e21b815250610c3a565b6104f7604051806040016040528060018152602001600f60fb1b815250604051806040016040528060018152602001603160f81b815250610c3a565b610533604051806040016040528060018152602001607960f81b815250604051806040016040528060018152602001603160f81b815250610c3a565b610575604051806040016040528060058152602001640eed2c8e8d60db1b8152506040518060400160405280600381526020016206872760eb1b815250610c3a565b6105b8604051806040016040528060068152602001651a195a59da1d60d21b8152506040518060400160405280600381526020016206872760eb1b815250610c3a565b6105f6604051806040016040528060028152602001610e4f60f31b815250604051806040016040528060028152602001610c8d60f21b815250610c3a565b61061e604051806040016040528060068152602001657374726f6b6560d01b8152508c610c3a565b6040516020016106349796959493929190611dbe565b60408051601f19818403018152602083019091526000825290610c67565b6040516020016106629190611e50565b60408051601f19818403018152919052905060195b6101db81116108d857816107ad6106c160405180604001604052806002815260200161783160f01b815250604051806040016040528060018152602001600360fc1b815250610c3a565b6106ed60405180604001604052806002815260200161793160f01b8152506106e886610b11565b610c3a565b61072c604051806040016040528060028152602001613c1960f11b8152506040518060400160405280600381526020016203530360ec1b815250610c3a565b610753604051806040016040528060028152602001613c9960f11b8152506106e888610b11565b61077b604051806040016040528060068152602001657374726f6b6560d01b8152508c610c3a565b60405160200161078f959493929190611e6c565b60408051601f19818403018152602083019091526000825290610c97565b6108a26107d760405180604001604052806002815260200161783160f01b8152506106e886610b11565b61081460405180604001604052806002815260200161793160f01b815250604051806040016040528060018152602001600360fc1b815250610c3a565b61083b604051806040016040528060028152602001613c1960f11b8152506106e888610b11565b61087a604051806040016040528060028152602001613c9960f11b8152506040518060400160405280600381526020016203530360ec1b815250610c3a565b61077b604051806040016040528060068152602001657374726f6b6560d01b8152508d610c3a565b6040516020016108b493929190611ed7565b60408051601f1981840301815291905291506108d1601982611bcd565b9050610677565b5082816108e68a604b610cc0565b6108f18b607d610ee6565b6108fc8c60af611051565b6109078d60e161153b565b6109138e6101136116b3565b8860405160200161092b989796959493929190611f1a565b6040516020818303038152906040529650505050505050919050565b60606000610954836100df565b905060006109808260405160200161096c9190611fbf565b6040516020818303038152906040526109ab565b905080604051602001610993919061202e565b60405160208183030381529060405292505050919050565b60608151600014156109cb57505060408051602081019091526000815290565b600060405180606001604052806040815260200161260260409139905060006003845160026109fa9190611bcd565b610a049190611bb9565b610a0f906004611b84565b90506000610a1e826020611bcd565b67ffffffffffffffff811115610a3657610a36612073565b6040519080825280601f01601f191660200182016040528015610a60576020820181803683370190505b509050818152600183018586518101602084015b81831015610acc576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f8116850151825350600101610a74565b600389510660018114610ae65760028114610af757610b03565b613d3d60f01b600119830152610b03565b603d60f81b6000198301525b509398975050505050505050565b606081610b355750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610b5f5780610b4981612089565b9150610b589050600a83611bb9565b9150610b39565b60008167ffffffffffffffff811115610b7a57610b7a612073565b6040519080825280601f01601f191660200182016040528015610ba4576020820181803683370190505b509050815b8515610c3157610bba6001826120a4565b90506000610bc9600a88611bb9565b610bd490600a611b84565b610bde90886120a4565b610be99060306120bb565b905060008160f81b905080848481518110610c0657610c066120e0565b60200101906001600160f81b031916908160001a905350610c28600a89611bb9565b97505050610ba9565b50949350505050565b60608282604051602001610c4f9291906120f6565b60405160208183030381529060405290505b92915050565b6060610c90604051806040016040528060048152602001631c9958dd60e21b815250848461194e565b9392505050565b6060610c90604051806040016040528060048152602001636c696e6560e01b815250848461194e565b60405163316ea39360e11b8152600481018390526060906000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906362dd472690602401602060405180830381865afa158015610d2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4f9190612163565b9050610ede610da260405180604001604052806005815260200164636c61737360d81b8152506040518060400160405280600f81526020016e626f6c642074657874207469746c6560881b815250610c3a565b610ddf604051806040016040528060018152602001600f60fb1b81525060405180604001604052806002815260200161035360f41b815250610c3a565b610e0c604051806040016040528060018152602001607960f81b8152506106e860018961026791906120a4565b604051602001610e1e93929190611ed7565b60408051601f19818403018152828201909152600b82526a4d4552432d47415547452d60a81b602083015290610e539061197f565b836001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610e91573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610eb99190810190612180565b604051602001610eca92919061222d565b604051602081830303815290604052611992565b949350505050565b606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166396c82e576040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f6c9190611b55565b60405162ecfa2f60e31b8152600481018690527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690630767d17890602401602060405180830381865afa158015610fd0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff49190611b55565b61100090612710611b84565b61100a9190611bb9565b9050610ede61101d610267606484611bb9565b61102b61026760648561225c565b60405160200161103c929190612270565b604051602081830303815290604052846119bb565b606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166306de9b666040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d79190612163565b6001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611114573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113891906122ce565b61114390600a6123d7565b60405162ecfa2f60e31b8152600481018690527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690630767d17890602401602060405180830381865afa1580156111a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111cb9190611b55565b6111d59190611bb9565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166306de9b666040518163ffffffff1660e01b8152600401602060405180830381865afa158015611237573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125b9190612163565b6001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611298573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112bc91906122ce565b6112c790600a6123d7565b6040516336534b1160e21b8152600481018790527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063d94d2c4490602401602060405180830381865afa15801561132c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113509190611b55565b61135a9190611bb9565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166306de9b666040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e09190612163565b6001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561141d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144191906122ce565b61144c90600a6123d7565b611457906004611b84565b604051632cb6a30760e11b8152600481018890527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063596d460e90602401602060405180830381865afa1580156114bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e09190611b55565b6114ea9190611bb9565b90506115316114f884610b11565b61150183610b11565b61150a85610b11565b60405160200161151c939291906123e6565b604051602081830303815290604052866119bb565b9695505050505050565b604051632cb6a30760e11b8152600481018390526060906000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063596d460e90602401602060405180830381865afa1580156115a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ca9190611b55565b6040516336534b1160e21b8152600481018690529091506000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d94d2c4490602401602060405180830381865afa158015611635573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116599190611b55565b90506000811561167e578161166f846064611b84565b6116799190611bb9565b611681565b60005b9050611531611694610267606484611bb9565b6116a261026760648561225c565b60405160200161151c92919061245f565b60405163316ea39360e11b8152600481018390526060906000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906362dd472690602401602060405180830381865afa15801561171e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117429190612163565b905060606001600160a01b0382161561190f576000826001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611795573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117b991906122ce565b6117c490600a6123d7565b60405163020e5c6160e51b8152600481018890527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906341cb8c2090602401602060405180830381865afa158015611829573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184d9190611b55565b611858906064611b84565b6118629190611bb9565b9050611872610267606483611bb9565b61188061026760648461225c565b846001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156118be573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526118e69190810190612180565b6040516020016118f8939291906124b3565b60405160208183030381529060405291505061193b565b506040805180820190915260138152724661726d696e6720476167756520283078302960681b60208201525b61194581856119bb565b95945050505050565b6060838383866040516020016119679493929190612526565b60405160208183030381529060405290509392505050565b60608160405160200161010291906125c3565b6060610c90604051806040016040528060048152602001631d195e1d60e21b815250848461194e565b6060610c90611a0360405180604001604052806005815260200164636c61737360d81b815250604051806040016040528060048152602001631d195e1d60e21b815250610c3a565b611a40604051806040016040528060018152602001600f60fb1b81525060405180604001604052806002815260200161035360f41b815250610c3a565b611a6d604051806040016040528060018152602001607960f81b8152506106e860018861026791906120a4565b604051602001611a7f93929190611ed7565b60405160208183030381529060405284611992565b600060208284031215611aa657600080fd5b5035919050565b60005b83811015611ac8578181015183820152602001611ab0565b83811115611ad7576000848401525b50505050565b6020815260008251806020840152611afc816040850160208701611aad565b601f01601f19169190910160400192915050565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000815260008251611b4881601a850160208701611aad565b91909101601a0192915050565b600060208284031215611b6757600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611b9e57611b9e611b6e565b500290565b634e487b7160e01b600052601260045260246000fd5b600082611bc857611bc8611ba3565b500490565b60008219821115611be057611be0611b6e565b500190565b630d0e6d8560e31b815260008251611c04816004850160208701611aad565b692c313030252c3530252960b01b6004939091019283015250600e01919050565b640d0e6d8c2560db1b815260008251611c45816005850160208701611aad565b6d2c313030252c3530252c3130252960901b6005939091019283015250601301919050565b651e3232b3399f60d11b81527f3c72616469616c4772616469656e742069643d226772616469656e742220637860068201527f3d2230222063793d22302220723d223122206772616469656e74556e6974733d60268201527f227573657253706163654f6e55736522206772616469656e745472616e73666f60468201527f726d3d227472616e736c6174652835303020302920726f74617465283133352960668201526c1039b1b0b632941b181814911f60991b6086820152711e39ba37b81039ba37b816b1b7b637b91e9160711b60938201528151600090611d558160a5850160208701611aad565b8201611d6960a582016211179f60e91b9052565b711e39ba37b81037b33339b2ba1e911891179f60711b60a8820152701e17b930b234b0b623b930b234b2b73a1f60791b60ba8201526c1e17b232b3399f1e17b9bb339f60991b60cb82015260d8019392505050565b600088516020611dd18285838e01611aad565b895191840191611de48184848e01611aad565b8951920191611df68184848d01611aad565b8851920191611e088184848c01611aad565b8751920191611e1a8184848b01611aad565b8651920191611e2c8184848a01611aad565b8551920191611e3e8184848901611aad565b919091019a9950505050505050505050565b60008251611e62818460208701611aad565b9190910192915050565b60008651611e7e818460208b01611aad565b865190830190611e92818360208b01611aad565b8651910190611ea5818360208a01611aad565b8551910190611eb8818360208901611aad565b8451910190611ecb818360208801611aad565b01979650505050505050565b60008451611ee9818460208901611aad565b845190830190611efd818360208901611aad565b8451910190611f10818360208801611aad565b0195945050505050565b600089516020611f2d8285838f01611aad565b8a5191840191611f408184848f01611aad565b8a51920191611f528184848e01611aad565b8951920191611f648184848d01611aad565b8851920191611f768184848c01611aad565b8751920191611f888184848b01611aad565b8651920191611f9a8184848a01611aad565b8551920191611fac8184848901611aad565b919091019b9a5050505050505050505050565b7f7b226e616d65223a20224d59204e4654222c20226465736372697074696f6e228152741d10111116101134b6b0b3b2afb230ba30911d101160591b602082015260008251612015816035850160208701611aad565b61227d60f01b6035939091019283015250603701919050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081526000825161206681601d850160208701611aad565b91909101601d0192915050565b634e487b7160e01b600052604160045260246000fd5b600060001982141561209d5761209d611b6e565b5060010190565b6000828210156120b6576120b6611b6e565b500390565b600060ff821660ff84168060ff038211156120d8576120d8611b6e565b019392505050565b634e487b7160e01b600052603260045260246000fd5b60008351612108818460208801611aad565b603d60f81b908301908152601160f91b60018201528351612130816002840160208801611aad565b61011160f51b60029290910191820152600401949350505050565b6001600160a01b038116811461216057600080fd5b50565b60006020828403121561217557600080fd5b8151610c908161214b565b60006020828403121561219257600080fd5b815167ffffffffffffffff808211156121aa57600080fd5b818401915084601f8301126121be57600080fd5b8151818111156121d0576121d0612073565b604051601f8201601f19908116603f011681019083821181831017156121f8576121f8612073565b8160405282815287602084870101111561221157600080fd5b612222836020830160208801611aad565b979650505050505050565b6000835161223f818460208801611aad565b835190830190612253818360208801611aad565b01949350505050565b60008261226b5761226b611ba3565b500690565b6702bb2b4b3b43a1d160c51b815260008351612293816008850160208801611aad565b601760f91b60089184019182015283516122b4816009840160208801611aad565b602560f81b60099290910191820152600a01949350505050565b6000602082840312156122e057600080fd5b815160ff81168114610c9057600080fd5b600181600019825b8086111561232d5782820483111561231357612313611b6e565b8086161561232057928202925b94851c94918002916122f9565b50509250929050565b60008261234557506001610c61565b8161235257506000610c61565b816001811461236857600281146123725761238e565b6001915050610c61565b60ff84111561238357612383611b6e565b50506001821b610c61565b5060208310610133831016604e8410600b84101617156123b1575081810a610c61565b6123bb83836122f1565b80600019048211156123cf576123cf611b6e565b029392505050565b6000610c9060ff841683612336565b600084516123f8818460208901611aad565b6a01026a2a92190141a1015160ad1b908301908152845161242081600b840160208901611aad565b6201015960ed1b600b9290910191820152835161244481600e840160208801611aad565b602960f81b600e9290910191820152600f0195945050505050565b6b0213ab937102930ba34b79d160a51b81526000835161248681600c850160208801611aad565b601760f91b600c9184019182015283516124a781600d840160208801611aad565b01600d01949350505050565b600084516124c5818460208901611aad565b601760f91b90830190815284516124e3816001840160208901611aad565b600160fd1b600192909101918201528351612505816002840160208801611aad565b66081cdd185ad95960ca1b6002929091019182015260090195945050505050565b600f60fa1b815260008551612542816001850160208a01611aad565b600160fd1b6001918401918201528551612563816002840160208a01611aad565b808201915050601f60f91b8060028301528551612587816003850160208a01611aad565b600181840101925050613c2f60f01b600283015284516125ae816004850160208901611aad565b60049201918201526005019695505050505050565b683c215b43444154415b60b81b8152600082516125e7816009850160208701611aad565b622eae9f60e91b6009939091019283015250600c0191905056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212200d6a8f10a26c1cc4bed6c7fd1db39fc9d8228574c228eaebeece49c301baa9b264736f6c634300080c0033";

export class Renderer__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _gauge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Renderer> {
    return super.deploy(_gauge, overrides || {}) as Promise<Renderer>;
  }
  getDeployTransaction(
    _gauge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_gauge, overrides || {});
  }
  attach(address: string): Renderer {
    return super.attach(address) as Renderer;
  }
  connect(signer: Signer): Renderer__factory {
    return super.connect(signer) as Renderer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RendererInterface {
    return new utils.Interface(_abi) as RendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Renderer {
    return new Contract(address, _abi, signerOrProvider) as Renderer;
  }
}
