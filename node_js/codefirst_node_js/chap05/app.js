const express = require('express');
const morgan = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

// 포트 설정
const port = process.env.PORT || 8000;
app.set('port', port);

// 공통 미들웨어
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const models = require('./models');

// 라우팅 설정
app.get('/', (req, res, next) => {
  models.newCustomer.findAll()
    .then((customers) => {
      res.send(customers);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

app.get('/customer', (req, res) => {
  res.sendfile(__dirname + '/customer.html');
});

app.post('/customer', (req, res) => {
  let body = req.body;

  models.newCustomer.create({
    name: body.name,
    age: body.age,
    gender: body.gender,
  })
    .then((result) => {
      console.log('customer created!!');
      res.redirect('/customer');
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(port, () => {
  console.log(port + '포트에서 서버 실행중...');
});
