const express = require('express');
const morgan = require('morgan');
const request = require('request');

const app = express();

// 포트 설정
const port = process.env.PORT || 8080;
app.set('port', port);

// 공통 미들웨어
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우팅 설정
app.get('/naver/news', (req, res) => {
  const client_id = '';
  const client_secret = '';
  const api_url = `https://openapi.naver.com/v1/search/blog?query=${encodeURI(
    '코스피',
  )}`;
  const option = {};
  const options = {
    url: api_url,
    qs: option,
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret,
    },
  };

  request.get(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let newsItem = JSON.parse(body).items;
      // items - title, link, description, pubDate

      const newsJson = {
        title: [],
        link: [],
        description: [],
        pubDate: [],
      };

      for (let i = 0; i < newsItem.length; i++) {
        newsJson.title.push(
          newsItem[i].title.replace(/(<([^>]+)>)|&quot;/gi, ''),
        );
        newsJson.link.push(newsItem[i].link);
        newsJson.description.push(
          newsItem[i].description.replace(/(<([^>]+)>)|&quot;/gi, ''),
        );
        newsJson.pubDate.push(newsItem[i].pubDate);
      }
      res.json(newsJson);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

app.listen(port, () => {
  console.log(port + '포트에서 서버 실행중...');
});
