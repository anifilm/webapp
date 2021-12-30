const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

// 포트 설정
const port = process.env.PORT || 8080;
app.set('port', port);

// 공통 미들웨어
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우팅 설정
app.get('/airkorea', async (req, res) => {
  const serviceKey = '';
  const airUrl = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?';

  let params = encodeURI('serviceKey') + '=' + serviceKey;
  params += '&' + encodeURI('numOfRows') + '=' + encodeURI('1');
  params += '&' + encodeURI('pageNo') + '=' + encodeURI('1');
  params += '&' + encodeURI('dataTerm') + '=' + encodeURI('DAILY');
  params += '&' + encodeURI('ver') + '=' + encodeURI('1.3');
  params += '&' + encodeURI('stationName') + '=' + encodeURI('마포구');
  params += '&' + encodeURI('returnType') + '=' + encodeURI('json');

  const url = airUrl + params;

  try {
    const result = await axios.get(url);
    res.json(result.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(port + '포트에서 서버 실행중...');
});
