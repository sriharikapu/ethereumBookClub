var BookClub = artifacts.require("BookClub");
var partnerAddress = " 0x36c99767df182347fb6266f48dc5dba50651c93b";


module.exports =async function(callback) {
      let bookClub;
       bookClub = await BookClub.deployed();
      await  bookClub.setPartnerBridge(partnerAddress);
}
