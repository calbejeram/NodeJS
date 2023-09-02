const http = require('http');
const hostName = 'localhost';
const port = 3000;

const myDate = require('./module.cjs');
const greetings = require('./greetingmodule.cjs');

const server = http.createServer((req, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write(greetings.myGreetings());
    response.write(`Current time is ${myDate.myDateTime()}`);
    response.end('Hello this is node js');
    
})

server.listen(port, hostName, () => {
    console.log(`Server is running at https://${hostName}:${port}`);
})