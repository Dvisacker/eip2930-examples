import { ethers } from "hardhat"
import CallerModule from "../ignition/modules/Caller";
import hre from 'hardhat';

async function main() {
    const { calculator, caller } = await hre.ignition.deploy(CallerModule);
    const [user] = await ethers.getSigners();
    const data = "0xf4acc7b5";

    const callerAddress = await caller.getAddress();
    const calculatorAddress = await calculator.getAddress();

    const tx1 = {
        from: user.address,
        to: callerAddress,
        data: data,
        value: 0,
        type: 1,
        accessList: [
            {
                address: calculatorAddress,
                storageKeys: [
                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                    "0x0000000000000000000000000000000000000000000000000000000000000001",
                ],
            },
        ],
    };

    const tx2 = {
        from: user.address,
        to: callerAddress,
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