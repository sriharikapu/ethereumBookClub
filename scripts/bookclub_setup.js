var BookClub = artifacts.require("BookClub");
var bridgeAddress = "0x28c62b13617c6aef8307dcca6c47b32ce08613c5";


module.exports =async function(callback) {
      let bookClub;
       bookClub = await BookClub.deployed();
      await  bookClub.setPartnerBridge(bridgeAddress);
}
