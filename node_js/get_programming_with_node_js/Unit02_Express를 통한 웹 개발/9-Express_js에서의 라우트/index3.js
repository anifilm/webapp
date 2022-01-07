const port = 3000,
  express = require('express'),
  app = express(),
  homeController = require("./controllers/homeController");

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

app.post('/contact', (req, res) => {
  res.send('Contact information submitted successfully.');
});

app.get('/items/:vegetable', homeController.sendReqParam);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
