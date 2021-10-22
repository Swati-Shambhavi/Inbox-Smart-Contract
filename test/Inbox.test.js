// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
//Web3 is in uppercase because whenever we are going to make use of Web3 we always going to importing a constructor function(going to use instances of Web3 library).
const Web3 = require('web3');

//We use Web3 constructor to make instances of web3 library. We can make multiple instances inside 1 project. the purpose of each instance is to connect with different Ethereum network
//It is not common to access multiple networks from 1 application, genrally we will only work with 1 instance of Web3 at a time

//How the below code works?
//We use Web3 to make instance of web3. Immediately after doing so, we have to do some configuration of the new instance that we have created. We have to something called "PROVIDER"
//Provider= It can be thought of like a communication layer b/w web3 library and some specific Ethereum netwrk. Every provider that we use of to connect to different network has an identical set of methods on it. These methods allow the web3 library to send a request over to a local ntwrk and to receive a response.
//Think of provider as a phone and, web3 and the Ethereum network to which we connect (Ganache in this case) as different people who want to communicate
const web3 = new Web3(ganache.provider());

//How will we use Mocha to test Ethereum?
//Cycle:
/*
1. Mocha starts
2. Deploy a new contract
3. Manipulate the contract
4. Make an assertion about the contract
5. Go back to step 2

Explained better in notes.
 */

beforeEach(() => {
  //Get a list of all accounts
  web3.eth.getAccounts().then((fetchedAccounts) => {
    console.log(fetchedAccounts);
  });
});
describe('Inbox', () => {
  it('deploys a contract', () => {});
});
