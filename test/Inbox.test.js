const assert = require('assert');
const ganache = require('ganache-cli');
const { interface, bytecode } = require('../compile');

const Web3 = require('web3');

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
let accounts;
let inbox;
const DEFAULT_MESSAGE = 'Hi there!';
beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  //use one of those accounts to deploy the contract
  //explained in notes
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [DEFAULT_MESSAGE],
    })
    .send({ from: accounts[0], gas: '1000000' });
});
describe('Inbox', () => {
  it('deploys a contract', () => {
    //first test to check if our contract has been successfully deployed in the ethereum network(ganache in this case) or not.
    //we will do that by check if the inbox reference has a valid address (address where our contract got deployed) or not
    assert.ok(inbox.options.address);
  });
  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, DEFAULT_MESSAGE);
  });

  it('can set new message', async () => {
    await inbox.methods.setMessage('Bye there!').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Bye there!');
  });
});
