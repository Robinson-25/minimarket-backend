import { NextFunction, Request, Response } from 'express';
import * as service from './productos.service';

export const listar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await service.listar(req.query.buscar as string | undefined));
  } catch (e) {
    next(e);
  }
};
export const crear = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(201).json(await service.crear(req.body));
  } catch (e) {
    next(e);
  }
};
export const actualizar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await service.actualizar(Number(req.params.id), req.body));
  } catch (e) {
    next(e);
  }
};
export const desactivar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await service.desactivar(Number(req.params.id)));
  } catch (e) {
    next(e);
  }
};
