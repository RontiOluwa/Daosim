import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { TransferField } from "./interface";
import ABI from "../abi.json";

const wethInterface = new utils.Interface(ABI);
const wethContractAddress = "0x9ED2135850920BA65566D010B947b49E88651675";

// Initializing and exporting the Contract Object
export const contract = new Contract(wethContractAddress, wethInterface);
