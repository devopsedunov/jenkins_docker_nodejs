// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello jenkins_docker_nodejs\n");
});

// listen on http://ec2-18-191-209-105.us-east-2.compute.amazonaws.com:8000
server.listen(8000);
console.log("Server listening at http://ec2-18-191-209-105.us-east-2.compute.amazonaws.com:8000/");
