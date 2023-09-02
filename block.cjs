//  fs is responsible for filesystem input/o operation
const fileSys = require('fs');
const txtFile = fileSys.readFileSync('./sample.txt');

console.log(txtFile.toString());
console.log('Program Ended');