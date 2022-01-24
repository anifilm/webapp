import * as express from 'express';

import { Cat, CatType } from './app.model';

const app: express.Express = express();
const port: number = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ cats: Cat });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`);
});
