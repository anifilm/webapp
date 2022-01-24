import * as express from 'express';

const app: express.Express = express();
const port: number = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello, world!');
});
app.get('/test', (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({
    name: 'yoon sang seok',
    age: 99,
    friends: ['ss', 'ys', 'ye'],
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`);
});
