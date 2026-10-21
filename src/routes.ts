import { Router } from 'express';
import authRoutes from './modules/auth/auth.routes';
import productosRoutes from './modules/productos/productos.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/productos', productosRoutes);
// Agrega aqui: usuarios, clientes, ventas, caja, compras, almacen, reportes

export default router;
