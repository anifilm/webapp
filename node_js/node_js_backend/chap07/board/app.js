const express = require('express');
const handlebars = require('express-handlebars');
const mongodbConnection = require('./configs/mongodb-connection'); // 몽고디비 연결 함수
const postService = require('./services/post-service'); // 서비스 파일 로딩

const app = express();
// res.body와 POST 요청을 해석하기 위한 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
  'handlebars',
  handlebars.create({ // 핸들바 생성 및 엔진 반환
    helpers: require('./configs/handlebars-helpers'),
  }).engine,
);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// 리스트 페이지
app.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1; // 현재 페이지 데이터
  const search = req.query.search || ''; // 검색어 데이터
  try {
    // postService.list에서 글 목록과 페이지 데이터를 가져옴
    const [posts, paginator] = await postService.list(collection, page, search);
    // 리스트 페이지 렌더링
    res.render('home', { title: '테스트 게시판', search, paginator, posts });
  } catch (error) {
    console.error(error);
    res.render('home', { title: '테스트 게시판' });
    // 에러가 나는 경우는 빈 값으로 렌더링
  }
});
// 쓰기 페이지 이동
app.get('/write', (req, res) => {
  res.render('write', { title: '테스트 게시판' });
});
app.post('/write', async (req, res) => {
  const post = req.body;
  // 글쓰기 후 결과 반환
  const result = await postService.writePost(collection, post);
  // 생성된 도큐먼트의 _id를 사용해 상세페이지로 이동
  res.redirect(`/detail/${result.insertedId}`);
});
app.get('/detail/:id', async (req, res) => {
  res.render('detail', { title: '테스트 게시판' });
});

let collection;

app.listen(3000, async () => {
  console.log('Server started');
  // mongodbConnection()의 결과는 mongoClient
  const mongoClient = await mongodbConnection();
  // mongoClient.db()로 디비 선택 collection()으로 컬렉션 선택 후 collection에 할당
  collection = mongoClient.db().collection('post');
  console.log('MongoDB connected');
});
