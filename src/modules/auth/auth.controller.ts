import { NextFunction, Request, Response } from 'express';
import * as service from './auth.service';

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await service.login(req.body.email, req.body.password));
  } catch (e) {
    next(e);
  }
}
