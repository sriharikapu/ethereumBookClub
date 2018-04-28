var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = 'disorder forward mean duty choose level debris twist desk other decrease bottom'

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "	https://ropsten.infura.io/mpFYodHneqDf2O5rWHwL")
      },
      network_id: 3,
      gas: 4700000
    }   
  }
};
