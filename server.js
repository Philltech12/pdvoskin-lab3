var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (require, response) {
	var q = url.parse(require.url, true);
	var filename = "." + q.pathname;
	//var request = url.parse(require.url, true);
	var action = q.pathname;
	
	fs.readFile(filename, function(err, data) {
		if (err) {
			response.writeHead(404, {'Content-Type': 'text/html'});
			return response.end("Error 404 Page Not Found");
		}  
		response.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin' : '*' });
		response.write(data);
		return response;
	});
	
	if (action == '/img.jpg') {
		var img = fs.readFileSync('./img.jpg');
		response.writeHead(200, {'Content-Type': 'img.jpg' });
		response.write(img, 'binary');
	}
	
}).listen(1337);
console.log("Server running on port 1337!");