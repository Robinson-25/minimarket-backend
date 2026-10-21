import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export interface TokenPayload {
  id: number;
  rol: 'ADMIN' | 'CAJERO';
}

export const firmarToken = (payload: TokenPayload) =>
  jwt.sign(payload, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES as jwt.SignOptions['expiresIn'] });

export const verificarToken = (token: string) => jwt.verify(token, env.JWT_SECRET) as TokenPayload;
