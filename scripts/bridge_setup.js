var Bridge = artifacts.require("Bridge");
var bookClubAddress = "0x26c89a4d33f99d6a5cf3bda0fd49154471d19401";


module.exports =async function(callback) {
      let bridge
      bridge = await Bridge.deployed();
      await bridge.setPartnerBridge(bookClubAddress);
      await bridge.setFee(web3.toWei(.1,'ether'));
}
