// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;


contract Getter {
    
    uint256 private x = 1;

    function get() public view returns (uint256) {
        return x;
    }

}
