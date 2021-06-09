// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

contract Quote{
    string private message;
    address public owner;
    
    mapping (address => bool) public whitelist;
    
    constructor(){
        owner = msg.sender;
        whitelist[msg.sender] = true;
        
    }
    
    modifier onlyOwner{
        require(msg.sender == owner, 'Only owner');
        _;
    }
    
    
    function setQuote(string memory _message) public onlyWhitelist{
        message = _message;
    }
}