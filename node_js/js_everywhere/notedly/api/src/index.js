const express = require('express');

const app = express();
const port = process.env.POST || '4000';

app.get('/', (req, res) => res.send('Hello, world!'));

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`),
);
