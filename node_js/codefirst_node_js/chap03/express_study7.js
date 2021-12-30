const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  const output = `
    <h1>express로 웹 만들기</h1>
    <p>메인 페이지입니다.</p>
    <img src="./sample.png" width="400px" />
  `;
  res.send(output);
});

app.get('/user/:id', (req, res) => {
  res.send(req.params.id + '님의 개인 페이지입니다.');
});

app.listen(8080, () => {
  console.log('8080포트에서 서버 실행중...');
});
