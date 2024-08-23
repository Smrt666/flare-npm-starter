import { ethers } from "ethers";
import { coston2 } from "../flare-periphery2/packages/npm_package/dist/index.js";


export async function main() {
    const jsonRPC = new ethers.JsonRpcProvider(`https://coston2-api.flare.network/ext/bc/C/rpc`);
    let FastUpdaterAddress = await coston2.products.FastUpdater.getAddress(jsonRPC);

    let ftsov2 = new ethers.Contract(FastUpdaterAddress, coston2.products.FastUpdater.abi, jsonRPC);

    const feedIndexes = [0, 2, 9];
    let [feeds, decimals, timestamp] = await ftsov2.fetchCurrentFeeds(feedIndexes);
    console.log("Feeds:", feeds);
    console.log("Decimals:", decimals);
    console.log("Timestamp:", timestamp);
}

await main();
