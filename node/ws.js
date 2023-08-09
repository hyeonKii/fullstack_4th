// import http from "http"; // ESM
const http = require('http'); //CJS
const server = http.createServer((req, res) => {
    res.write('hello world');
    res.end();
});

server.listen(80, () => console.log('server started 80...'));