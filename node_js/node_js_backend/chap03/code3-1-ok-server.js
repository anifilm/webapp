const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end("OK");
});

server.listen("3000", () => console.log("OK 서버 시작!"));
