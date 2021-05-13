const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider('camp vendor mushroom river cake high second ancient always gown exotic episode',
  "https://rinkeby.infura.io/v3/d4e6f58b0d6d47b99b05caf99ee061c1");

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attepmting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!']})
    .send({ gas: '1000000', from: accounts[0]});

  console.log('Contract deployed to', result.options.address);

};

deploy();
