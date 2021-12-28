const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const myLogger = (req, res, next) => {
  console.log('Logged');
  next();
};

app.use(myLogger);

app.listen(8080, () => {
  console.log('8080포트에서 서버 실행중...');
});
