const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

// 포트 설정
const port = process.env.PORT || 8000;
app.set('port', port);

// 템플릿 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// 라우터 설정
app.get('/', function (req, res, next) {
  res.render('index', { menu: 'Home' });
});

app.get('/menu1', function (req, res, next) {
  res.render('index', { menu: 'Menu1' });
});

app.get('/menu2', function (req, res, next) {
  res.render('index', { menu: 'Menu2' });
});

app.get('/menu3', function (req, res, next) {
  res.render('index', { menu: 'Menu3' });
});

app.listen(port, () => {
  console.log(port + '포트에서 서버 실행중...');
});
