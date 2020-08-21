import client from './client';

const addUser = async (newUser) => {
  try {
    return await client.db('throwaway').collection('highscores').insertOne(newUser);
  } catch (err) {
    throw new Error(err);
  }
};

export default addUser;
