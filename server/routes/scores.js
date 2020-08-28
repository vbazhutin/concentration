import { Router } from 'express';
import { addScore, showScores } from '../db';

const router = new Router();

router.get('/', async (_, res) => {
  const mongoRes = await showScores();
  res.status(200);
  res.json(mongoRes);
});

router.post('/add', async ({ body }, res) => {
  res.status(201);
  const mongoRes = await addScore(body);
  res.json(mongoRes);
});

export default router;
