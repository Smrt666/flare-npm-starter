import { ethers } from "ethers";
import { coston2 } from "../flare-periphery2/packages/npm_package/dist/index.js";


export async function main() {
    // Query contract
    const jsonRPC = new ethers.JsonRpcProvider(`https://coston2-api.flare.network/ext/bc/C/rpc`);
    let WNatAddress = await coston2.products.WNat.getAddress(jsonRPC);

    console.log("WNat address:", WNatAddress);

    let WNatContract = new ethers.Contract(WNatAddress, coston2.products.WNat.abi, jsonRPC);
    let symbol = await WNatContract.symbol();

    console.log("Symbol:", symbol);
}

await main();
