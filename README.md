## EIP-2930 Access Lists

Two examples to demonstrate when access lists. The first example shows a correct usage of access lists. The second example showcases use of access lists with an incorrect storage slot which leads to increase gas cost.

## 

```
npx hardhat compile
npx hardhat node
npx hardhat ignition ignition/modules/Calculator.ts --network localhost
npx hardhat ignition ignition/modules/Getter.ts --network localhost
npx hardhat run scripts/goodExample.ts --network localhost
npx hardhat run scripts/badExample.ts --network localhost
```