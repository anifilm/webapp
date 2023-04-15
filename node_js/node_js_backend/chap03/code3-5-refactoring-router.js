const http = require("http");
const url = require("url");

http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;
  res.setHeader("Content-Type", "text/html");

  if (path in urlMap) {
    urlMap[path](req, res);
  }
  else {
    notFound(req, res);
  }
}).listen("3000", () => console.log("라우터를 만들어 보자!"));

const user = (req, res) => {
  const userInfo = url.parse(req.url, true).query;
  res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);
};

const feed = (req, res) => {
  res.end(`<ul>
    <li>pucture1</li>
    <li>pucture2</li>
    <li>pucture3</li>
  </ul>
  `);
}

const notFound = (req, res) => {
  res.statusCode = 404;
  res.end("404 page not found");
}

const urlMap = {
  "/": (req, res) => res.end("HOME"),
  "/user": user,
  "/feed": feed,
};
