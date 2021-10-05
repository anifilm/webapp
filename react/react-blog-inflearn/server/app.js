import express from 'express';
import mongoose from 'mongoose';
import config from './config';

import hpp from 'hpp';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

// Routes

const app = express();
const { MONGO_URI } = config;

const prod = process.env.NODE_ENV === 'production';

app.use(hpp());
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan('dev'));

app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connecting Success!!');
  })
  .catch((e) => {
    console.log(e);
  });


// Use routes
app.get('/');

export default app;
