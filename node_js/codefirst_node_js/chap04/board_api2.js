const express = require('express');
const morgan = require('morgan');
const url = require('url');
const uuidAPIkey = require('uuid-apikey');

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

// 테스트를 위한 API키
const key = {
  apiKey: process.env.apiKey,
  uuid: process.env.uuid,
};

// 테스트를 위한 게시글 데이터
let boardList = [
  {
    id: '1',
    userId: '박민경',
    title: '안녕하세요.',
    content: '날씨가 많이 춥습니다. 건강하세요.',
    date: '2021-12-31T03:12:24.479Z',
  },
  {
    id: '2',
    userId: '로드북',
    title: '안녕하세요. 로드북 입니다.',
    content: '백견불여일타 시리즈 많이 사랑해주세요.',
    date: '2021-12-31T03:14:05.483Z',
  },
  {
    id: '3',
    userId: '김현정',
    title: '벌써 연말이네요.',
    content: '이번 년도는 특히 코로나 때문인지 시간이 순식간에 지나갔습니다. 앞으로...',
  },
];
let numOfBoard = boardList.length;

// 라우팅 설정
app.get('/', (req, res) => {
  res.send('This is api.js');
});

app.get('/board', (req, res) => {
  res.send(boardList);
});

app.post('/board', (req, res) => {
  const board = {
    id: ++numOfBoard + '', // 문자로 저장
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    date: new Date(),
  };
  boardList.push(board);

  res.redirect('/board');
});

app.put('/board/:id', (req, res) => {
  // req.params.id 값 찾아 리스트에서 삭제
  const findItem = boardList.find((item) => {
    return item.id === req.params.id;
  });

  const idx = boardList.indexOf(findItem);
  boardList.splice(idx, 1);

  // 리스트에 새로운 요소 추가
  const board = {
    id: req.params.id,
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    date: new Date(),
  };
  boardList.push(board);

  res.redirect('/board');
});

app.delete('/board/:id', (req, res) => {
  // req.params.id 값 찾아 리스트에서 삭제
  const findItem = boardList.find((item) => {
    return item.id === req.params.id;
  });

  const idx = boardList.indexOf(findItem);
  boardList.splice(idx, 1);

  res.redirect('/board');
});

// 게시글 검색 API using uuid-key
app.get('/board/:apikey/:type', (req, res) => {
  let { type, apikey } = req.params;
  const queryData = url.parse(req.url, true).query;

  if (uuidAPIkey.isAPIKey(apikey) && uuidAPIkey.check(apikey, key.uuid)) {
    if (type === 'search') {
      const keyword = queryData.keyword;
      const result = boardList.filter((e) => {
        return e.title.includes(keyword);
      });
      res.send(result);
    }
    else if (type === 'user') {
      const userId = queryData.userId;
      const result = boardList.filter((e) => {
        return e.userId === userId;
      });
      res.send(result);
    }
    else {
      res.send('wrong URL');
    }
  }
  else {
    res.send('wrong API Key');
  }
});

app.listen(port, () => {
  console.log(port + '포트에서 서버 실행중...');
});
