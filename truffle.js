var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = 'disorder forward mean duty choose level debris twist desk other decrease bottom'

module.exports = {
  networks: {
  	development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "	https://ropsten.infura.io/mpFYodHneqDf2O5rWHwL")
      },
      network_id: 3,
      gas: 4700000
    }   
  }, 
  rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "	https://rinkeby.infura.io/")
      },
      network_id: 4,
      gas: 4700000
    }   
  };
