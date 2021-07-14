const http = require('http');

const server = http.createServer(
    onRequest = (request, response ) => {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.write('<h1>Hello, Sally!</h1>');
        response.end();
    }
).listen(3000);