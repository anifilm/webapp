const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index2.html');
});

app.listen(8080, () => {
  console.log('8080포트에서 서버 실행중...');
});
