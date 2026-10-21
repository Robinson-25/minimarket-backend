import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

export const validar =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const r = schema.safeParse(req.body);
    if (!r.success) return res.status(400).json({ error: 'Datos inválidos', detalle: r.error.flatten() });
    req.body = r.data;
    next();
  };
