import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '20mb' }));
app.use(morgan('dev'));

app.get('/', (_req: express.Request, res: express.Response) => {
  res.json({
    ok: true,
    service: 'beatzy-api',
    health: '/api/health',
    web: 'http://localhost:3001'
  });
});

app.get('/api/health', (_req: express.Request, res: express.Response) => {
  res.json({ ok: true, service: 'beatzy-api' });
});

const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[beatzy-api] listening on :${port}`);
});

