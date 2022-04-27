/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Merc, MercInterface } from "../Merc";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "SupplyLimit",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "EMISSION_DURATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EMISSION_RATE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INITIAL_MINT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_EMISSION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintReceiver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
        internalType: "address",
        name: "_mintReceiver",
        type: "address",
      },
    ],
    name: "setMintReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526200001d630784ce00680145874153cc266c3562000287565b62000035906b033b2e3c9fd0803ce8000000620002a9565b6005553480156200004557600080fd5b5060408051808201825260098152684d657263656e61727960b81b6020808301918252835180850190945260048452634d45524360e01b9084015281519192916200009391600391620001cb565b508051620000a9906004906020840190620001cb565b5050600780546001600160a01b0319163390811790915542600655620000dd91506b033b2e3c9fd0803ce8000000620000e3565b62000301565b6001600160a01b0382166200013e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001529190620002a9565b90915550506001600160a01b0382166000908152602081905260408120805483929062000181908490620002a9565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001d990620002c4565b90600052602060002090601f016020900481019282620001fd576000855562000248565b82601f106200021857805160ff191683800117855562000248565b8280016001018555821562000248579182015b82811115620002485782518255916020019190600101906200022b565b50620002569291506200025a565b5090565b5b808211156200025657600081556001016200025b565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615620002a457620002a462000271565b500290565b60008219821115620002bf57620002bf62000271565b500190565b600181811c90821680620002d957607f821691505b60208210811415620002fb57634e487b7160e01b600052602260045260246000fd5b50919050565b610de080620003116000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063586fc5b5116100b8578063a9059cbb1161007c578063a9059cbb14610264578063c7bb26a014610277578063ca7df92c146102a2578063d5abeb01146102b5578063dd62ed3e146102be578063f4b744f0146102d157600080fd5b8063586fc5b51461020f57806370a082311461021857806394e382c01461024157806395d89b4114610249578063a457c2d71461025157600080fd5b806323b872dd1161010a57806323b872dd146101b45780632d9c4dd2146101c7578063313ce567146101d257806339509351146101e157806342966c68146101f45780634bf365df1461020757600080fd5b806301b8199a1461014757806306fdde031461016a578063095ea7b31461017f5780631249c58b146101a257806318160ddd146101ac575b600080fd5b610157680145874153cc266c3581565b6040519081526020015b60405180910390f35b6101726102e4565b6040516101619190610bc6565b61019261018d366004610c37565b610376565b6040519015158152602001610161565b6101aa610390565b005b600254610157565b6101926101c2366004610c61565b6103de565b610157630784ce0081565b60405160128152602001610161565b6101926101ef366004610c37565b610402565b6101aa610202366004610c9d565b610441565b610157610465565b61015760065481565b610157610226366004610cb6565b6001600160a01b031660009081526020819052604090205490565b6101576104cb565b6101726104e5565b61019261025f366004610c37565b6104f4565b610192610272366004610c37565b61058b565b60075461028a906001600160a01b031681565b6040516001600160a01b039091168152602001610161565b6101576b033b2e3c9fd0803ce800000081565b61015760055481565b6101576102cc366004610cd8565b610599565b6101aa6102df366004610cb6565b6105e7565b6060600380546102f390610d0b565b80601f016020809104026020016040519081016040528092919081815260200182805461031f90610d0b565b801561036c5780601f106103415761010080835404028352916020019161036c565b820191906000526020600020905b81548152906001019060200180831161034f57829003601f168201915b5050505050905090565b600033610384818585610634565b60019150505b92915050565b600061039a610465565b9050806103ba57604051631594bea360e31b815260040160405180910390fd5b6007546103d7906001600160a01b03166103d2610465565b610759565b5042600655565b6000336103ec858285610838565b6103f78585856108b2565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190610384908290869061043c908790610d5c565b610634565b61044b3382610a80565b806005600082825461045d9190610d74565b909155505050565b600080600654426104769190610d74565b9050630784ce0081111561048b5750630784ce005b61049e81680145874153cc266c35610d8b565b915060006104ab60025490565b6005546104b89190610d74565b9050808311156104c6578092505b505090565b6104e2630784ce00680145874153cc266c35610d8b565b81565b6060600480546102f390610d0b565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091908381101561057e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6103f78286868403610634565b6000336103848185856108b2565b6007546000906001600160a01b03838116911614156105bb575060001961038a565b506001600160a01b0382811660009081526001602090815260408083209385168352929052205461038a565b6007546001600160a01b031633146106125760405163ea8e4eb560e01b815260040160405180910390fd5b600780546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383166106965760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610575565b6001600160a01b0382166106f75760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610575565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0382166107af5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610575565b80600260008282546107c19190610d5c565b90915550506001600160a01b038216600090815260208190526040812080548392906107ee908490610d5c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60006108448484610599565b905060001981146108ac578181101561089f5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610575565b6108ac8484848403610634565b50505050565b6001600160a01b0383166109165760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610575565b6001600160a01b0382166109785760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610575565b6001600160a01b038316600090815260208190526040902054818110156109f05760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610575565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610a27908490610d5c565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a7391815260200190565b60405180910390a36108ac565b6001600160a01b038216610ae05760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610575565b6001600160a01b03821660009081526020819052604090205481811015610b545760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610575565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610b83908490610d74565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161074c565b600060208083528351808285015260005b81811015610bf357858101830151858201604001528201610bd7565b81811115610c05576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610c3257600080fd5b919050565b60008060408385031215610c4a57600080fd5b610c5383610c1b565b946020939093013593505050565b600080600060608486031215610c7657600080fd5b610c7f84610c1b565b9250610c8d60208501610c1b565b9150604084013590509250925092565b600060208284031215610caf57600080fd5b5035919050565b600060208284031215610cc857600080fd5b610cd182610c1b565b9392505050565b60008060408385031215610ceb57600080fd5b610cf483610c1b565b9150610d0260208401610c1b565b90509250929050565b600181811c90821680610d1f57607f821691505b60208210811415610d4057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610d6f57610d6f610d46565b500190565b600082821015610d8657610d86610d46565b500390565b6000816000190483118215151615610da557610da5610d46565b50029056fea264697066735822122008cffce17c09bdde0d908e54d6c955f04cb6c8e178c5e108ab9d20220aa1859f64736f6c634300080c0033";

export class Merc__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Merc> {
    return super.deploy(overrides || {}) as Promise<Merc>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Merc {
    return super.attach(address) as Merc;
  }
  connect(signer: Signer): Merc__factory {
    return super.connect(signer) as Merc__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MercInterface {
    return new utils.Interface(_abi) as MercInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Merc {
    return new Contract(address, _abi, signerOrProvider) as Merc;
  }
}
