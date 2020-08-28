import client from './client';

export const addScore = async (newScore) => {
  try {
    return await client.db('throwaway').collection('highscores').insertOne(newScore);
  } catch (err) {
    throw new Error(err);
  }
};

export const showScores = async () => {
  try {
    return await client.db('throwaway').collection('highscores').find().toArray();
  } catch (err) {
    throw new Error(err);
  }
};
