// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
pragma solidity ^0.4.17;

contract Inbox {
    //these are the storage variable. it is kind of like an instance variable, it is going to exist for the life of this contract
    //A storage variable is one that is automatically stored with the contract on the blockchain. SO that means, whenever we change the value of message right here, the value we assign to message will be automatically stored for all eternity on the ethereum blockchain.
    //This is in contrast of local variable
    string public message;

    function Inbox(string _initialMessage) public {
        message = _initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
