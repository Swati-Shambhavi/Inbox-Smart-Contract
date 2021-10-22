//compile code will go here

const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');
//compile fn takes 2 parameters
//1. the file which needs to be compiled
//2. Number of contracts which needs to be compiled

// console.log(solc.compile(source, 1));
//when you will print the output of the compile fn we will get ab object "contracts", that object will contain all the data that we need
//we want to make use of only 2 properties i.e, the bytecode and the interface (ABI).
//Because our project only has 1 contract, so rather than returning the entire big nested object we can just export some details of the Inbox contract
module.exports = solc.compile(source, 1).contracts[':Inbox'];
