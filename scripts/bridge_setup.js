var Bridge = artifacts.require("Bridge");
var bookClubAddress = "0xa674a5e5933d9fd73aa7b792652a03e652e5b575";


module.exports =async function(callback) {
      let bridge
      bridge = await Bridge.deployed();
      await bridge.setPartnerBridge(bookClubAddress);
      await bridge.setFee(web3.toWei(.1,'ether'));
}
