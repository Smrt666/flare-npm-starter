import { ethers } from "ethers";
import { coston2 } from "../flare-periphery2/packages/npm_package/dist/index.js";


export async function main() {
    // first get some c2flr on https://faucet.flare.network/coston2,
    // othervise this program might not work

    const jsonRPC = new ethers.JsonRpcProvider(`https://coston2-api.flare.network/ext/bc/C/rpc`);
    let WNatAddress = await coston2.products.WNat.getAddress(jsonRPC);
    const signer = new ethers.Wallet("PUT_YOUR_PRIVATE_KEY_HERE ", jsonRPC);

    let WNatContract = new ethers.Contract(WNatAddress, coston2.products.WNat.abi, signer);

    let transaction = await WNatContract.deposit({ value: ethers.parseEther("1") });
    console.log(transaction);
    let res = await transaction.wait();
    console.log(res);
}

await main();
