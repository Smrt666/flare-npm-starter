import { randomBytes } from "crypto";
import { ethers } from "ethers";

export function main() {
    let id = randomBytes(32).toString('hex');
    let privateKey = "0x" + id;
    console.log("Private key:", privateKey);

    let wallet = new ethers.Wallet(privateKey);
    console.log("Address: " + wallet.address);
}

main();