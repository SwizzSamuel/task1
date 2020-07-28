const https = require('https');

const port = 6000 || process.env.PORT
const host = '172.0.0.1';

const server = https.createServer((req, res) => {
    res.statusCode(200);
    res.setHeader('Content-Type', 'application/json');
    res.end('Resource created successfully')
})

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
})