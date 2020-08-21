import express from 'express';
import cors from 'cors';

import scores from './routes/scores';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);
app.use(express.json());

app.use('/scores', scores);

app.listen(5000);
