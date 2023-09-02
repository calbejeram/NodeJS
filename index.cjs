const http = require('http');
const fileSys = require('fs')
const hostName = 'localhost';
const port = 3000;

const log = require('./logmodule.cjs');
const data = require('./data.cjs');
const fullName = new data('Jeram', 'Calbe');

const server = http.createServer((req, res) => {

    if (req.url == '/' ) {
        // res.writeHead(200, {
        //     'content-type': 'text/html'
        // });
        // res.write('<html> <body> <h1> This is the home page. </h1> </body </html>');
        // log.info('Success')
        // res.end('');
        fileSys.readFile('./index.html', (error, txtFile) => {
            if (error) {
                return console.log(`Error Found: ${error}`)
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(txtFile);
            return res.end();
        });
    } else if (req.url == '/fruitshop') {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write('<html> <body> <h1> This is the fruitshop page. </h1> </body </html>');
        res.end('');
    } else if (req.url == '/admin') {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write('<html> <body> <h1> This is the admin page. </h1> </body </html>');
        res.write(`Hello, I am ${fullName.fullName()}`)
        log.info('Success')
        res.end('');
    } else {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write('<html> <body> <h1> Invalid Request </h1> </body </html>');
        res.end('');
    }
});

server.listen(port, hostName, () => {
    console.log(`Server is running at https://${hostName}:${port}`);
});