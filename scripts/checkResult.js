var BookClub = artifacts.require("BookClub");
var myAddress = "0x931b582d4573284193cbfbe5e76bd41405961be8";


module.exports =async function(callback) {
      let bookClub;
       bookClub = await BookClub.deployed();
      console.log(myAddress,' is a member: ',await  bookClub.isMember(myAddress));
}
