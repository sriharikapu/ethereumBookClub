var Bridge = artifacts.require("Bridge");
var partnerAddress = "";


module.exports =async function(callback) {
      let bridge
      bridge = await Bridge.deployed();
      await bridge.joinBookClub({value:web3.toWei(.1,'ether')});
}
