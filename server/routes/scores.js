import { Router } from 'express';
import addUser from '../db';

const router = new Router();

router.post('/add', async (req, res) => {
  res.status(201);
  console.log(res.body);
  // res.json(await addScoreRes())
});

export default router;
