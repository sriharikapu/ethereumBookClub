var Bridge = artifacts.require("Bridge");
var bookClubAddress = "0xb4ae79be401b1e8298eac1bd80279852b7f2856b";


module.exports =async function(callback) {
      let bridge
      bridge = await Bridge.deployed();
      await bridge.setPartnerBridge(bookClubAddress);
      await bridge.setFee(web3.toWei(.1,'ether'));
}
