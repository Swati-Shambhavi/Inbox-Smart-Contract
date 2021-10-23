const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'body forward derive when jewel used cabin ability dizzy cloud found loud',
  'https://rinkeby.infura.io/v3/788e2c69bd114be1a5abf01c7a5dd8cc'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);
  const inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hey there!'] })
    .send({ gas: '1000000', gasPrice: '500000000', from: accounts[0] });
  console.log('Contract deployed to: ', inbox.options.address);
};
deploy();
