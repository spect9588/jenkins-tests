var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<hH>HELLO WORLD!</h1>');
}).listen(8000);

console.log('http server running on port 8000');
