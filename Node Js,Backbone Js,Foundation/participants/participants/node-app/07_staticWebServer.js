var http = require('http');
var	fs = require('fs');
var	path = require('path');
var	host = 'localhost';
var	port = '9000';

var mimes = {
	".htm" : "text/html",
	".css" : "text/css",
	".js" : "text/javascript",
	".gif" : "image/gif",
	".jpg" : "image/jpeg",
	".png" : "image/png"
}

var server = http.createServer(function(req, res){
	//console.log(req.url);

	var filepath = (req.url === '/') ? ('./staticSite/index.html') : ('.' + req.url);

	var contentType = mimes[path.extname(filepath)];
	// Check to see if the file exists
	fs.exists(filepath, function(file_exists){
		if(file_exists){
			// Read and Serve
			fs.readFile(filepath, function(error, content){
				if(error){
					res.writeHead(500);
					res.end();
				} else {
						if (req.url === '/'){
							res.writeHead(302, { 'Location': '/staticSite/index.html'});
							res.end();
						} else {
							res.writeHead(200, { 'Content-Type' : contentType});
							res.end(content, 'utf-8');
						}
				}
			})

		} else {
			res.writeHead(404, { 'Content-Type' : "text/html"});
			res.end("Sorry we could not find the file you requested !");
		}
	})

}).listen(port, host, function(){
	console.log('Server Running on http://' + host + ':' + port);
})