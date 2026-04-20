const http = require('http');
const server = http.createServer((res,req)=>{
    req.writeHead(200,{'content-type':'text/html'});
    req.end("<h1>hello world</h1>");
});

server.listen(3000,()=>{
    console.log("the server is runnnig on http://localhost:3000");
});
