/*
Run a node.js file on the command line via 
localhost 127.0.0.1 without needing on html file 
*/

var http = require('http')

// Remember : callback function besr writeen in 
// arrow syntax 
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': "text/html"})
    response.end("Hello World the server is up and running")
}).listen(8080)