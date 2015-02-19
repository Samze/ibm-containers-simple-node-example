var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('This is a container in IBM Containers on Bluemix!\n');
}).listen(8080);
console.log('Server listening on port 8080');