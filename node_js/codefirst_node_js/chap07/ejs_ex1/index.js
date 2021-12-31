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
app.get('/', (req, res) => {
  res.render('index', {
    People: [
      {
        name: 'Gildong',
        age: '15',
      },
      {
        name: 'Jinsu',
        age: '27',
      },
      {
        name: 'Hyena',
        age: '25',
      },
    ],
    title: 'Express',
  });
});

app.listen(port, () => {
  console.log(port + '포트에서 서버 실행중...');
});
