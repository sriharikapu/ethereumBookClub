var Bridge = artifacts.require("Bridge");
var myAddress = "0x931b582d4573284193cbfbe5e76bd41405961be8";


module.exports =async function(callback) {
      let bridge
      bridge = await Bridge.deployed();
      console.log('Bridge Address: ',bridge.address)
      console.log(myAddress,' is a member (in Bridge) ', await bridge.isMember(myAddress));
}
