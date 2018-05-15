

const http = require("http");
const host="localhost";
const port=3000;

var server=http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World............NodeJs server...........');
}).listen(port,host,function(){
 console.log('Server running at http://localhost:3000/');   
});

