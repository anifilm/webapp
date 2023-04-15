const http = require("http");

let count = 0;

// 노드 서버 객체 생성
const server = http.createServer((req, res) => {
  console.log(coung += 1);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("hello\n");
  // prettier-ignore
  setTimeout(() => {
    res.end("Node.js");
  }, 2000);
});

server.listen(8000, () => console.log("Hello Node.js"));
