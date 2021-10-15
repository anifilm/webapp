import express from 'express';
import expressHandlebars from 'express-handlebars';
import path from 'path';

import getFortune from './lib/fortune.js';

const __dirname = path.resolve();

const app = express();

// 핸들바 뷰 엔진 설정
app.engine(
  'hbs',
  expressHandlebars({
    defaultLayout: 'main',
    extname: 'hbs',
  }),
);
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about', { fortune: getFortune() });
});

// custom 404 page
app.use((req, res) => {
  res.status(404);
  res.render('404');
});

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render('500');
});

app.listen(port, () => {
  console.log(`The serveris running, please open your browser at http://localhost:${port}`);
});
