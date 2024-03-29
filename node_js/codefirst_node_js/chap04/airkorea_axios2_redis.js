const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

// 레디스 접속
const redis = require('redis');
const client = redis.createClient(6379, 'localhost');

client.on('error', (err) => {
  console.log('Redis Error:', err);
});

// 포트 설정
const port = process.env.PORT || 8000;
app.set('port', port);

// 공통 미들웨어
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우터 설정
app.get('/airkorea', async (req, res) => {
  await client.lrange('airItems', 0, -1, async (err, cachedItems) => {
    if (err) throw err;

    if (cachedItems.length) {
      console.log('캐시된 데이터가 있습니다. 해당 데이터를 사용합니다.');

      res.send(`관측 지역: ${cachedItems[0]} / 관측 시간: ${cachedItems[1]} <br>
                미세먼지 ${cachedItems[2]} 초미세먼지 ${cachedItems[3]} 입니다.`);
    }
    else { // 데이터가 캐시에 없는 경우
      const serviceKey = process.env.airServiceKey;
      const airUrl =
        'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?';

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
        const airItem = {
          //location: result.data.ArpltnInforInqireSvcVo['stationName'], // 지역
          location: '마포구',
          time: result.data.response.body.items[0]['dataTime'], // 시간대
          pm10: result.data.response.body.items[0]['pm10Value'], // pm10 수치
          pm25: result.data.response.body.items[0]['pm25Value'], // pm25 수치
        };
        console.log(airItem);

        const badAir = [];
        // pm10은 미세먼지 수치
        if (airItem.pm10 <= 30) {
          badAir.push('좋음😀');
        }
        else if (airItem.pm10 > 30 && airItem.pm10 <= 80) {
          badAir.push('보통😐');
        }
        else {
          badAir.push('나쁨😡');
        }
        //pm25는 초미세먼지 수치
        if (airItem.pm25 <= 15) {
          badAir.push('좋음😀');
        }
        else if (airItem.pm25 > 15 && airItem.pm25 <= 35) {
          badAir.push('보통😐');
        }
        else {
          badAir.push('나쁨😡');
        }

        console.log('캐시된 데이터가 없습니다. 데이터를 저장합니다.');

        const airItems = [airItem.location, airItem.time, badAir[0], badAir[1]];
        airItems.forEach((val) => {
          client.rpush('airItems', val); // redis에 저장
        });
        client.expire('airItems', 60 * 60); // 데이터 유효 시간 설정 60분

        res.send(`관측 지역: ${airItem.location} / 관측 시간: ${airItem.time} <br>
                  미세먼지 ${badAir[0]} 초미세먼지 ${badAir[1]} 입니다.`);
      }
      catch (error) {
        console.log(error);
      }
    }
  });
});

app.listen(port, () => {
  console.log(port + '포트에서 서버 실행중...');
});
