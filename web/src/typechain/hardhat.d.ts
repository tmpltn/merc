/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ERC4626",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC4626__factory>;
    getContractFactory(
      name: "Gauge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Gauge__factory>;
    getContractFactory(
      name: "IGauge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGauge__factory>;
    getContractFactory(
      name: "IMerc",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMerc__factory>;
    getContractFactory(
      name: "IRenderer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRenderer__factory>;
    getContractFactory(
      name: "Merc",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Merc__factory>;
    getContractFactory(
      name: "PledgingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PledgingVault__factory>;
    getContractFactory(
      name: "Renderer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Renderer__factory>;
    getContractFactory(
      name: "StakingVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakingVault__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ERC4626",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC4626>;
    getContractAt(
      name: "Gauge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Gauge>;
    getContractAt(
      name: "IGauge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGauge>;
    getContractAt(
      name: "IMerc",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMerc>;
    getContractAt(
      name: "IRenderer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRenderer>;
    getContractAt(
      name: "Merc",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Merc>;
    getContractAt(
      name: "PledgingVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PledgingVault>;
    getContractAt(
      name: "Renderer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Renderer>;
    getContractAt(
      name: "StakingVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakingVault>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
