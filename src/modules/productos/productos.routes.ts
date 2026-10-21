import { Router } from 'express';
import { auth } from '../../middlewares/auth';
import { soloRoles } from '../../middlewares/roles';
import { validar } from '../../middlewares/validar';
import * as c from './productos.controller';
import { productoSchema } from './productos.schema';

const router = Router();
router.use(auth);

router.get('/', c.listar);
router.post('/', soloRoles('ADMIN'), validar(productoSchema), c.crear);
router.put('/:id', soloRoles('ADMIN'), validar(productoSchema), c.actualizar);
router.delete('/:id', soloRoles('ADMIN'), c.desactivar);

export default router;
