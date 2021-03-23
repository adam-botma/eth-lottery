//import dependencies
const path = require ('path');
const fs = require ('fs');
const solc = require('solc');

//import .sol file
const inboxPath = path.resolve(__dirname , 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

//compile .sol file
module.exports = solc.compile(source, 1).contracts[':Inbox'];
