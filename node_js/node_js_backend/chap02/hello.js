const http = require("http");

let count = 0;

const server = http.createServer((req, res) => {
  log(count += 1);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("hello\n");
  setTimeout(() => {
    res.end("Node.js");
  }, 2000);
});

function log(count) {
  console.log(count);
}

server.listen(8000);
