import { ethers } from "hardhat"
import GetterModule from "../ignition/modules/Getter";
import hre from 'hardhat';

async function main() {
    const { getter } = await hre.ignition.deploy(GetterModule);
    const [user] = await ethers.getSigners();
    const data = "0x6d4ce63c";

    const getterAddress = await getter.getAddress();

    const tx1 = {
        from: user.address,
        to: getterAddress,
        data: data,
        value: 0,
        type: 1,
        accessList: [
            {
                address: getterAddress,
                storageKeys: [
                    "0x0000000000000000000000000000000000000000000000000000000000000001",
                ],
            },
        ],
    };

    const tx2 = {
        from: user.address,
        to: getterAddress,
        data: data,
        value: 0
    }

    const txCall = await user.sendTransaction(tx1);
    const receipt = await txCall.wait();
    console.log(
        `gas cost for tx with access list: ${receipt?.gasUsed.toString()}`
    );

    const txCallNA = await user.sendTransaction(tx2);
    const receiptNA = await txCallNA.wait();
    console.log(
        `gas cost for tx without access list: ${receiptNA?.gasUsed.toString()}`
    );

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});