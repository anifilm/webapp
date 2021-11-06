import express from 'express';
import expressHandlebars from 'express-handlebars';
import path from 'path';

import handlers from './lib/handlers';

const __dirname = path.resolve();

const app = express();

const port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

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
