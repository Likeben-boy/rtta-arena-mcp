import { ethers } from "ethers";
export declare const ERC20_ABI: string[];
export declare const ARENA_ABI: string[];
export declare function getArenaContract(addressOrProvider: string, signerOrProvider: ethers.Signer | ethers.Provider): ethers.Contract;
export declare function getTokenContract(address: string, signerOrProvider: ethers.Signer | ethers.Provider): ethers.Contract;
