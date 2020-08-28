import express from 'express';
import cors from 'cors';

import scores from './routes/scores';

const app = express();

app.get('/,', (_, res) => {
  res.send('<h1> Hello from Express </h1>');
});

app.use(
  cors(),
);
app.use(express.json());

app.use('/scores', scores);

app.listen(process.env.PORT || 5000);
