
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
  	uint yay;
  	uint nay;
  }
  mapping(uint => uint) votes;
  uint vote_nonce;
  uint match_nonce;
  uint members;
  uint stake;
  mapping(address => address) matched;
  

  event Matched(address,address);
  event NewMember(address);
  event MemberLeaving(address);


  function BookClub(){
  	vote_nonce = 0;
  	match_nonce =0;
  }
  

  function joinBookClub() payable {
  	require(msg.value >= stake)
  	members(msg.sender) = true;
  	NewMember(address);
  	members += 1;

  }

  function requestNewBook(){
  	if(nextInLine == address(0)){
  		nextInLine = msg.sender;
  	}
  	else{
  		matched[nextInLine] = msg.sender;
  		matched[msg.sender] = nextInLine;
  		reputation[nextInLine] += 1;
  		reputation[msg.sender] += 1;
  		Matched(nextInLine,msg.sender);
  		nextInLine = address(0);
  	}
  }

  /*rate the user you were matched with*/
  function rateUser(address _user, uint _rating){
  	require(matched[msg.sender] == _user && _rating <= 5);
  	rating[_user] = (rating[_user]*reputation[_user] + _rating) / (reputation[_user] + 1);
  }


  /*can vote to kick someone out*/
  function initiateVote(address _traitor){
  	require(members[msg.sender]);
  	vote[vote_nonce] = VoteDetails({
  		traitor:_traitor,
  		start:now(),
  		yays:0,
  		nays:0
  	});

  }
  function settleVote(uint id){
  	VoteDetails memory _vote = votes[_id];
  	require(_vote.start <= now() + 86400*14);
  	if(_vote.yays > _vote.nays){
  		removeMember(_vote.traitor);
  	}
  }

  function vote(uint _id,bool _true_for_yay){
  	VoteDetails memory _vote = votes[_id];
  	require(_vote.start >= now() - 86400*14);
  	if(_true_for_yay){
  		_vote.yays += 1;
  	}
  	else{
  		_vote.nays += 1;
  	}
  }


  //How do we put in a timelock or not let anyone just leave?
  function leaveBookClub(){
  	removeMember(msg.sender);
  	msg.sender.transfer(this.value / members);
  }

  function removeMember(address _traitor) internal{
  	members[_traitor] = false;
  	MemberLeaving(_traitor);
  	members -= 1;
  }

}