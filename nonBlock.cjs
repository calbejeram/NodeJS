const fileSys = require('fs');

// readfile asynchronously and has two arguments first file location
const txtFile = fileSys.readFile('./sample.txt', function(error, txtFile){
    if (error) {
        return console.log(`Error found in ${error}`);
    }
    console.log(`File Message: ${txtFile}`);
});

console.log('Program Ended');