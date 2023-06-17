const http = require('http');
const server = http.createServer((rep, res) => {
    console.log('run request ...');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello Word!!</h3>');
    res.write('<h3>Continue!!</h3>')
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('Node.JS server is running on port: 3000')
})