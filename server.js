const http = require("http");
const fs = require("fs");
const { error } = require("console");

const server = http.createServer((req, res) => {
  fs.readFile("./message.txt", "utf-8", (error, data) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("error");
      console.error(error);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<p>${data}</p>`);
    }
  });
});
server.listen(3000, () => {
  console.log("the server is runnnig on http://localhost:3000");
});
