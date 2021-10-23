const express = require('express');
const path = require('path');

const app = express();

const _path = path.join(__dirname, './dist');

app.use('/', express.static(_path));

app.listen(3000, () => {
  console.log('lazy 이미지 서버: 시작 - http://localhost:3000');
});
