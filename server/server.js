// import { XMLHttpRequest } from 'xmlhttprequest';
// import url from 'url';
// import { accessToken, version } from './modules/consts.js';
// import { urls } from './modules/urls.js';
import http from 'http';

const hostname = '127.0.0.2';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server is running');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
