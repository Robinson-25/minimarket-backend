import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { env } from './config/env';
import { errores } from './middlewares/errores';
import routes from './routes';

const app = express();

app.use(helmet());
app.use(cors({ origin: env.FRONTEND_URL }));
app.use(express.json());

app.get('/api/salud', (_req, res) => res.json({ ok: true }));
app.use('/api', routes);
app.use(errores);

export default app;
