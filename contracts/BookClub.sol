
pragma solidity ^0.4.19;
contract BookClub {

  mapping(address => bool) members;
  mapping(address => uint) reputation;
  mapping(address => uint) spendingPower;
  address nextInLine;
  mapping(uint => Details) matches;
  struct Details{
    address amount;
    address owner;
    uint transferId;
  }

  struct VoteDetails{
  	address traitor;
  	uint start;
  }
  mapping(uint => uint) votes;
  uint vote_nonce;
  uint match_nonce;

  event Matched(string);
  event NewMember(string);

  function BookClub(){
  	vote_nonce = 0;
  	match_nonce =0;
  }
  

  function joinBookClub() payable {
  	members(msg.sender) == true;

  }

  function requestNewBook(){

  }

  /*rate the user you were matched with*/
  function rateUser(){

  }


  /*can vote to kick someone out*/
  function initiateVote(address _traitor){
  	require(members[msg.sender]);
  	vote[vote_nonce] = VoteDetails({
  		traitor:_traitor,
  		start:now()
  	});

  }
  function settleVote(){
  	require(votes[])
  }
  function leaveBookClub(){

  }




}