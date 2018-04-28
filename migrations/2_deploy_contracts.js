var Bridge = artifacts.require("./Bridge.sol");
var BookClub = artifacts.require("./BookClub.sol");

module.exports = function(deployer) {
  deployer.deploy(BookClub);
  deployer.deploy(Bridge);
};
