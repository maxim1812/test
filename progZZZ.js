

var http = require('http');
var port = 1234;
var server = http.createServer();

server.on('request', function(request, response)
{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.writeHead(200);	
 
    request.on('data', function(x)
    {
        
    });
	
    request.on('end', function()
    {
        var url = request.url + "";
        response.write("I love Python.");
			
        response.end();
    });
 
});
 
server.listen(port);
