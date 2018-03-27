import Web3 from 'web3';
import Promise from 'bluebird';
import HDWalletProvider from 'truffle-hdwallet-provider';
import { ROPSTEN_RPC_URL, LOCAL_TESTRPC_URL } from './config';

const getWeb3 = (mnemonic, rpcUrl) => {
  if (!mnemonic) {
    mnemonic = 'knee violin certain rebuild rival couch wonder bind bridge delay tourist poet';
  }

  if(!rpcUrl) {
    rpcUrl = ROPSTEN_RPC_URL;
  }
  
  const provider = new HDWalletProvider(mnemonic, rpcUrl);

//   const web3 = new Web3(provider);
  const web3 = new Web3(new Web3.providers.HttpProvider(LOCAL_TESTRPC_URL));

//   if (typeof web3.eth.getAccountsPromise === "undefined") {
//     Promise.promisifyAll(web3.eth, { suffix: "Promise" });
//   }
  return web3;
};

export default getWeb3;
