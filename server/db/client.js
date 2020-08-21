import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
});

// Close the connection after the server is shutdown
(async () => {
  await client.connect();

  // 'CTRL + C' - 'SIGINT'
  process.on('SIGINT', () => {
    client.close().then(() => {
      console.info('SIGINT received. Closing MongoClient.');

      // Avoid plugging up ports
      process.exit(0);
    });
  });
})();

export default client;
