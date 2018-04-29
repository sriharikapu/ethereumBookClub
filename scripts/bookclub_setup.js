var BookClub = artifacts.require("BookClub");
var bridgeAddress = "0x8276c4012116588547da5ce1e936fee6d2a99350";


module.exports =async function(callback) {
      let bookClub;
       bookClub = await BookClub.deployed();
      await  bookClub.setPartnerBridge(bridgeAddress);
}
