import Web3 from 'web3';

//Нужно подключить и настроить локальный узел Ethereum (мб Ganache)
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

export default web3;
