const http = require('http');
const fs = require('fs').promises;

http
  .createServer(async (req, res) => {
    try {
      const f = await fs.readFile('./fs_test.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(f);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(err.message);
    }
  })

  .listen(8080, () => {
    console.log('8080포트에서 서버 연결중...');
  });
