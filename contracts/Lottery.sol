pragma solidity ^0.4.17;

contract Lottery {
  address public manager;
  address[] public players;

//create lottery
  function Lottery() public{
    manager = msg.sender;

  }

//enter lottery by address
  function enter() public payable {
    require(msg.value > .01 ether);

    players.push(msg.sender);

  }

}
