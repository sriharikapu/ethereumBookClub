var Bridge = artifacts.require("Bridge");
var partnerAddress = "";


module.exports =async function(callback) {
      let bridge
      bridge = await Bridge.deployed();
      await bridge.setPartnerBridge(partnerAddress);
      await bridge.setFee(web3.toWei(.1,'ether'));
}
