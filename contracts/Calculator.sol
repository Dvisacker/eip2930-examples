// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Calculator {
    uint256 public x = 20;
    uint256 public y = 20;

    function getSum() public view returns (uint256) {
        return x + y;
    }
}
