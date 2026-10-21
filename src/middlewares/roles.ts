import { NextFunction, Request, Response } from 'express';

export const soloRoles =
  (...roles: Array<'ADMIN' | 'CAJERO'>) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.usuario || !roles.includes(req.usuario.rol)) {
      return res.status(403).json({ error: 'No tienes permiso' });
    }
    next();
  };
