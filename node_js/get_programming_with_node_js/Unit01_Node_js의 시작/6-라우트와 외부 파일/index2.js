const port = 3000,
  http = require('http'),
  httpStatus = require('http-status-codes'),
  fs = require('fs'),
  app = http.createServer();

const routeMap = {
  '/': 'views/index.html',
};

app.on('request', (req, res) => {
  res.writeHead(httpStatus.OK, {
    'Content-Type': 'text/html',
  });
  if (routeMap[req.url]) {
    fs.readFile(routeMap[req.url], (err, data) => {
      res.write(data);
      res.end();
    });
  } else {
    res.end('<h1>Sorry, not found.</h1>')
  }
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
