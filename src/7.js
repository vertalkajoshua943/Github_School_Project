const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World!</h1>');
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
}).listen(3000, () => {
  console.log('Server listening on port 3000');
});
