
pragma solidity ^0.4.19;

contract BookClub {

  mapping(address => bool) members;
  mapping(address => uint) reputation;
  mapping(address => uint) rating;
  address nextInLine;
  mapping(uint => Details) matches;
  struct Details{
    address maker;
    address taker;
    uint matchId;
  }

  struct VoteDetails{
    address traitor;
    uint start;
    uint yays;
    uint nays;
  }
  mapping(uint => VoteDetails) votes;
  uint vote_nonce;
  uint match_nonce;
  uint membersCount;
  uint stake;
  mapping(address => address) matched;
  

  event Matched(address,address);
  event NewMember(address);
  event MemberLeaving(address);


  constructor() public{
    OAR = OraclizeAddrResolverI(0xf0f20d1a90c618163d762f9f09baa003a60adeff);
    vote_nonce = 0;
    match_nonce =0;
  }
  

  function joinBookClub() payable public {
    require(msg.value >= stake);
    members[msg.sender] = true;
    emit NewMember(msg.sender);
    membersCount += 1;

  }

  function requestNewBook() public {
    if(nextInLine == address(0)){
      nextInLine = msg.sender;
    }
    else{
      matched[nextInLine] = msg.sender;
      matched[msg.sender] = nextInLine;
      reputation[nextInLine] += 1;
      reputation[msg.sender] += 1;
      emit Matched(nextInLine,msg.sender);
      nextInLine = address(0);
    }
  }

  /*rate the user you were matched with*/
  function rateUser(address _user, uint _rating) public {
    require(matched[msg.sender] == _user && _rating <= 5);
    rating[_user] = (rating[_user]*reputation[_user] + _rating) / (reputation[_user] + 1);
  }


  /*can vote to kick someone out*/
  function initiateVote(address _traitor) public {
    require(members[msg.sender]);
    votes[vote_nonce].traitor = _traitor;
    votes[vote_nonce].start = now;
    votes[vote_nonce].yays = 0;
    votes[vote_nonce].nays = 0;
    vote_nonce++;
  }
  function settleVote(uint _id) public {
    VoteDetails memory _vote = votes[_id];
    require(votes[_id].start <= now + 86400*14);
    if(_vote.yays > _vote.nays){
      removeMember(_vote.traitor);
    }
  }

  function vote(uint _id,bool _true_for_yay) public {
    VoteDetails memory _vote = votes[_id];
    require(_vote.start >= now - 86400*14);
    if(_true_for_yay){
      _vote.yays += 1;
    }
    else{
      _vote.nays += 1;
    }
  }


  //How do we put in a timelock or not let anyone just leave?
  function leaveBookClub() public {
    removeMember(msg.sender);
    membersCount -= 1;
    msg.sender.transfer(msg.value / membersCount);
  }

  function removeMember(address _traitor) internal{
    members[_traitor] = false;
    emit MemberLeaving(_traitor);
    membersCount -= 1;
  }

//Bridge Functionality

  string public partnerBridge; //address of bridge contract on other chain
  string public api;
  string public parameters;
  uint public lastValue;
  bytes4 private method_data;
  mapping(address => uint) departingBalance;
  



  function setBridge() public {
       method_data = this.retrieveData.selector;
       setAPI("json(https://ropsten.infura.io/).result");
       setPartnerBridge('"0x8c9aed038274ecf28a4f435fe731e2ff249166dc"');
  }

    function __callback(bytes32 myid, bytes32 result) {
        require(msg.sender == oraclize_cbAddress());
        lastValue = uint(result);
    }


    function checkMain(string _params)public {
        if (oraclize_getPrice("URL") > this.balance) {
            Print("Oraclize query was NOT sent, please add some ETH to cover for the query fee");
        } else {
            Print("Oraclize query was sent, standing by for the answer..");
            oraclize_query("URL",api,_params);
        }


  function setPartnerBridge(string _connected) public{
    partnerBridge = _connected;
  }
  
  function setAPI(string _api) public returns(string){
      api = _api; 
      return api;  //
  }

  function departingMember(address _former) public returns(uint){
    return departingBalance[address];
  }
}

}