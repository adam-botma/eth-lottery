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

//create random number
function random() private view returns (uint) {
    return uint(sha3(block.difficulty, now, players));
  }

//pick winner
function  pickWinner() public  restricted{

    uint index = random() % players.length;
    players[index].transfer(this.balance);
    players = new address[](0);

  }


//function modifier - used to not have to repeat ourselves in multiple functions - adds other functions where the underscore is
modifier restricted() {
    require(msg.sender == manager);
    _;
}

function getPlayers () public view returns (address[]) {
    return players;
}


}
