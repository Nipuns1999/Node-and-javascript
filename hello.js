
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) 
{
    var que = url.parse(req.url, true);
    var filename = "." + que.pathname;
    if (filename == "./") {
        filename = './index' ;
    }
    filename = filename + '.html';
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'content-Type': 'text/html'})
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })

}).listen(8080);

console.log('Server listening on port 8080......');