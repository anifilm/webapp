const port = 3000,
  express = require('express'),
  path = require('path'),
  app = express(),
  homeController = require('./controllers/homeController'),
  hbs = require('hbs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, Universe!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send({ body: req.body, msg: 'POST Successful!' });
});

app.get('/name', homeController.respondWithName);
app.get('/items/:vegetable', homeController.sendReqParam);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
