// import dependacies
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const { interface, bytecode } = require('../compile');

//create new Web3 Instance to our Ganache Blockchain
const provider = ganache.provider();
const web3 = new Web3(provider);


let accounts;
let inbox;
const initialMessage = 'Aloha!!';

beforeEach(async () => {

//Get a list of all account
accounts = await web3.eth.getAccounts()


//Use one of those accounts to deploy the contract

inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode , arguments: [initialMessage]})
  .send({from: accounts[0] , gas:'1000000' });

  inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys a contract',() => {
    //makes sure that an address exists
    assert.ok(inbox.options.address);
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, initialMessage);
  });

  it('can update a message', async () => {
    await inbox.methods.setMessage('a new message').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'a new message');

  })

});
