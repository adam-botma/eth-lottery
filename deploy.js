// import dependecies
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require ('./compile');

//create new Web3 Instance to Rinkeby Network
const provider = new HDWalletProvider(
  'exotic dragon supreme plunge allow clinic minimum capital media cake page memory',
  'https://rinkeby.infura.io/v3/6df3dd7b1b8649ee92b376de34224a71'
);

const web3 = new Web3(provider);

const depoly = async () => {

  //get list of accounts
  const accounts = await web3.eth.getAccounts();

  console.log('attempting to deploy from account ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode })
  .send({ gas: '1000000', from: accounts[0] });

  console.log(interface);
  console.log('Contract deployed to', result.options.address);
}

depoly();
