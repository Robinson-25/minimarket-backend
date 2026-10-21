import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { validar } from '../../middlewares/validar';
import { login } from './auth.controller';
import { loginSchema } from './auth.schema';

const router = Router();
const limite = rateLimit({ windowMs: 15 * 60 * 1000, max: 20 });

router.post('/login', limite, validar(loginSchema), login);

export default router;
