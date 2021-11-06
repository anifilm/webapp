import express from 'express';
import expressHandlebars from 'express-handlebars';
import path from 'path';

import getFortune from './lib/fortune.js';

const __dirname = path.resolve();

const app = express();

const port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

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
  console.log(`The server is running, please open your browser at http://localhost:${port}`);
});
