var BookClub = artifacts.require("BookClub");
var bridgeAddress = "0x6d2986ab86a62faa074f331d9754c709d7775d5f";


module.exports =async function(callback) {
      let bookClub;
       bookClub = await BookClub.deployed();
      await  bookClub.setPartnerBridge(bridgeAddress);
}
