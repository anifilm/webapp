import express from 'express';
import expressHandlebars from 'express-handlebars';
import path from 'path';

import handlers from './lib/handlers';

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

app.get('/', handlers.home);

app.get('/about', handlers.about);

// custom 404 page
app.use(handlers.notFound)

// custom 500 page
app.use(handlers.serverError)

app.listen(port, () => {
  console.log(`The server is running, please open your browser at http://localhost:${port}`);
});
