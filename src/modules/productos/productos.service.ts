import { prisma } from '../../config/db';

export const listar = (buscar?: string) =>
  prisma.producto.findMany({
    where: {
      activo: true,
      ...(buscar
        ? { OR: [{ nombre: { contains: buscar, mode: 'insensitive' } }, { codigo: { contains: buscar } }] }
        : {}),
    },
    orderBy: { nombre: 'asc' },
    take: 100,
  });

export const crear = (data: any) => prisma.producto.create({ data });
export const actualizar = (id: number, data: any) => prisma.producto.update({ where: { id }, data });
export const desactivar = (id: number) => prisma.producto.update({ where: { id }, data: { activo: false } });
