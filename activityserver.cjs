const http = require('http');
const fileSys = require('fs');
const hostName = 'localhost';
const port = 3000;

const server = http.createServer((require, response) => {
    if (require.url == '/') {
        fileSys.readFile('./views/home.html', (error, textFile) => {
            if (error) {
                return console.log(`Error Found: ${error}`)
            }
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(textFile);
            return response.end();
        });
    } else if (require.url == '/aboutus') {
        fileSys.readFile('./views/aboutus.html', (error, textFile) => {
            if (error) {
                return console.log(`Error Found: ${error}`)
            }
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(textFile);
            return response.end();
        });
    } else if (require.url == '/contactus') {
        fileSys.readFile('./views/contactus.html', (error, textFile) => {
            if (error) {
                return console.log(`Error Found: ${error}`)
            }
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(textFile);
            return response.end();
        });
    } else {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.write('<h1>Page not Found 404</h1>');
        return response.end();
    }
});

server.listen(port, hostName, () => {
    console.log(`Server is running at https://${hostName}:${port}`);
});