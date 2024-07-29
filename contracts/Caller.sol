// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {Calculator} from "./Calculator.sol";

contract Caller {
    Calculator calculator;

    constructor(address _calc) {
        calculator = Calculator(_calc);
    }

    // call the getSum function in the calculator contract
    function callCalculator() public view returns (uint256 sum) {
        sum = calculator.getSum();
    }
}
