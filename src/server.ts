import express from 'express';
import config from './config/env.js';
import { ServerRepository } from './repositories/server.repository.js';

const app = express();

app.get('/', async (_req, res) => {
  const serverRepo: ServerRepository = new ServerRepository();
  const health = await serverRepo.getServerHealth();
  const db = await serverRepo.getServerDatabase();
  const cache = await serverRepo.getServerCache();
  res.json({ health: health, database: db, cache: cache })
})

app.listen(config.PORT, () => {
  console.log(`🚀 Server started on port ${config.PORT || 5000}`);
})