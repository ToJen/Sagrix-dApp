export const MAINET_RPC_URL = 'https://mainnet.infura.io/KMfBfpobyyXcfpErT4hf'
export const ROPSTEN_RPC_URL = 'https://ropsten.infura.io/KMfBfpobyyXcfpErT4hf'
export const KOVAN_RPC_URL = 'https://kovan.infura.io/KMfBfpobyyXcfpErT4hf'
export const RINKEBY_RPC_URL = 'https://rinkeby.infura.io/KMfBfpobyyXcfpErT4hf'
/* run `testrpc` or `ganache-cli` then in a new terminal, run ./ngrok http 8545` wherever you have ngrok installed */
export const LOCAL_TESTRPC_URL = 'http://XXXXXX.ngrok.io'

export const networks = [
    {
      id: 1,
      name: "Mainnet",
      url: MAINET_RPC_URL
    },
    {
      id: 3,
      name: "Ropsten",
      url: ROPSTEN_RPC_URL
    },
    { 
      id: 42,
      name: "Kovan",
      url: KOVAN_RPC_URL
    },
    {
      id: 4,
      name: "Rinkeby",
      url: RINKEBY_RPC_URL
    },
    {
      id: 5,
      name: "Local",
      url: LOCAL_TESTRPC_URL
    }
];
