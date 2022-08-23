/*
    Idea from: https://www.pabbly.com/tutorials/node-js-http-module-serving-static-files-html-css-images/

    1. HTTP Module for Creating Server and Serving Static Files Using Node.js
       Static Files: HTML, CSS, JS, Images
    2. Start server
        > node TemplateServer.js
    3. Open Browser Tab at URL
        localhost:3000
*/

var http = require('http');
var fs = require('fs');
var path = require('path');
var port = 3000;

http.createServer(function(req, res){
    if(req.url === "/"){
        fs.readFile("Template.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
            console.log('Template.html served');
        });
    }else if(req.url.match("\.html$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "text/html"});
        fileStream.pipe(res);
        console.log('.html served');
    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
        console.log('.css served');
    }else if(req.url.match("\.js$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "text/javascript"});
        fileStream.pipe(res); 
        console.log('.js served');
    }else if(req.url.match("\.png$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
        console.log('.png served');
    }else if(req.url.match("\.jpg$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
        console.log('.jpg served');
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
        console.log('404, page not found error');
    }
}).listen(port);

console.log('Node.js webserver is running on localhost:' + port);