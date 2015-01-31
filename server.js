var http = require('http');
var fs = require('fs');
var path = require('path');
var util = require('util');

var obj = require('mymodule');
obj.foo();
obj.bar();


var jsonObj = require('./config');
jsonObj();
// console.log(jsonObj);


http.createServer(function (request, response) {
    console.log('request starting...',request.url);

    // response.writeHead(200, {'Content-Type' : 'text/html'});
    // content = util.format("<h1>%s is %d years old</h1>", 'michael yu', '32');
    // response.end(content, 'utf-8');



    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.exists(filePath, function (exists) {

        if (exists) {
            fs.readFile(filePath, function (error, content) {
                if (error) {
                    response.writeHead(500);
                    response.end();
                }
                else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                }
            });
        }
        else {
            response.writeHead(404);
            response.end();
        }
    });

}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');