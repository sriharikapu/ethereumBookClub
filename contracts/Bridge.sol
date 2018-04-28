pragma solidity ^0.4.21;

import "./libraries/SafeMath.sol";
import "./Oraclize/Oraclize_API.sol";



//This is the basic wrapped Ether to a different chain contract. 
//All money deposited is transformed into ERC20 tokens at the rate of 1 wei = 1 token
  /*You push money when you transfer (delete money here).  If it doesn't go through, you can check to see if transfer ID went through
  --How do we deal with livliness assumption? (do we?)
-We need to add ERC20 functionality to represent the Ether transferred from the other contract
  */
contract Bridge is usingOraclize{

  using SafeMath for uint256;

  /***VARIABLES***/
  uint public total_deposited_supply;
  uint transNonce;
  string public partnerBridge; //address of bridge contract on other chain
  string api;
  string parameters;
  address public owner;
  bytes4 private method_data;
  uint public stake;

  /***STORAGE***/
  mapping(address => uint) deposited_balances;
  mapping(address => bool) members;

  /***EVENTS***/
  event JoinedBookClub(address _from, uint _value);
  event LogUpdated(string value);
  event LogNewOraclizeQuery(string description);
  /***FUNCTIONS***/

  function Bridge() public {
       method_data = this.departingMember.selector;
       owner = msg.sender;
  }
 
  /***MODIFIERS***/
  /// @dev Access modifier for Owner functionality
  modifier onlyOwner() {
      require(msg.sender == owner);
      _;
  }

  function setOwner (address _owner) public onlyOwner(){
    owner = _owner;
  }


  function joinBookClub() payable public returns(uint){
    require(msg.value == stake && members[msg.sender] == false);
    deposited_balances[msg.sender] = msg.value;
    total_deposited_supply += msg.value;
  }


    //we need to append address to end of data_string

  function checkChild(string _transferId) public payable{
      if (oraclize_getPrice("URL") * 2  > address(this).balance) {
          emit LogNewOraclizeQuery("Oraclize query was NOT sent, please add some ETH to cover for the query fee");
      } else {
          emit LogNewOraclizeQuery("Oraclize query was sent for locked balance");
          string memory _parameters  = createQuery_value(_transferId);
          oraclize_query("URL",api, _parameters);
          //oraclize_query("URL","json(https://ropsten.infura.io/).result",'{"jsonrpc":"2.0","id":3,"method":"eth_call","params":[{"to":"0x76a83b371ab7232706eac16edf2b726f3a2dbe82","data":"0xad3b80a8"}, "latest"]}');
   }
  }

   function __callback(bytes32 myid, string result) public {
        require (msg.sender == oraclize_cbAddress());
        uint _res = parseInt(result);

    }

  function setPartnerBridge(string _connected) public onlyOwner(){
    partnerBridge = strConcat('"',_connected,'"');
  }


  //try: "json(https://localhost:8545).result"
  function setAPI(string _api, string _params) public onlyOwner(){
      api = _api; //"json(https://ropsten.infura.io/).result"
    }

    //can make internal once it works
    //check id (60 is an open, so we can try it)
    function createQuery_value(string _member_address) public constant returns(string){
      string memory _code = strConcat(fromCode(method_data),_member_address);
      string memory _part = ' {"jsonrpc":"2.0","id":60,"method":"eth_call","params":[{"to":';
      string memory _params2 = strConcat(_part,partnerBridge,',"data":"',_code,'"},"latest"]}');
      return _params2;
    }


  function departingMember(address _former) public returns(uint){
  }

  function getDeposit(address _user) public returns(uint){
    return deposited_balances[_user];
  }

  function fromCode(bytes4 code) public view returns (string) {                                                                                    
    bytes memory result = new bytes(10);                                                                                                         
    result[0] = byte('0');
    result[1] = byte('x');
    for (uint i=0; i<4; ++i) {
        result[2*i+2] = toHexDigit(uint8(code[i])/16);
        result[2*i+3] = toHexDigit(uint8(code[i])%16);
    }
    return string(result);
}

    function toHexDigit(uint8 d) pure internal returns (byte) {                                                                                      
    if (0 <= d && d <= 9) {                                                                                                                      
        return byte(uint8(byte('0')) + d);                                                                                                       
    } else if (10 <= uint8(d) && uint8(d) <= 15) {                                                                                               
        return byte(uint8(byte('a')) + d - 10);                                                                                                  
    }                                                                                                                                            
    revert();                                                                                                                                    
}                                                                                                                                                

}
