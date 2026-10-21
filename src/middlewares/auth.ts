import { NextFunction, Request, Response } from 'express';
import { TokenPayload, verificarToken } from '../utils/jwt';

declare global {
  namespace Express {
    interface Request {
      usuario?: TokenPayload;
    }
  }
}

export function auth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) return res.status(401).json({ error: 'No autenticado' });
  try {
    req.usuario = verificarToken(header.slice(7));
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido o vencido' });
  }
}
