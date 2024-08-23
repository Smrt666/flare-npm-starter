import { coston2 } from "../flare-periphery2/packages/npm_package/dist/index.js";

export function main() {
    const abi = coston2.products.FlareContractRegistry.abi;
    console.log(abi);
}

main();
