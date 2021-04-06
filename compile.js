//import dependencies
const path = require ('path');
const fs = require ('fs');
const solc = require('solc');

//import .sol file
const lotteryPath = path.resolve(__dirname , 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

//compile .sol file
module.exports = solc.compile(source, 1).contracts[':Lottery'];
