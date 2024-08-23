import { JsonRpcProvider } from "ethers";

export async function main() {
    const provider = new JsonRpcProvider("https://coston2-api.flare.network/ext/C/rpc");
    const { chainId } = await provider.getNetwork();
    console.log(chainId);
}

await main();
