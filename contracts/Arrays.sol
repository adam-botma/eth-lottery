pragma solidity ^0.4.17;

contract Arrays {

  //variable can always access via myArray  (does not return the entire array - must ask for individual vale)
  unit[] public myArray;


//can push to array
  function addValues() public {
    myArray.push(1);
    myArray.push(10);
    myArray.push(30);
  }


//can get arrays length
  function getArrayLength() public view returns (unit){
    return myArray.length;
  }


//can access individual elements
  function getFirstElement() public view returns (unit){
    return myArray[0];
  }

//return the entire array
function getFullArray() public view returns (unit[]) {
  return myArray;
}

}
