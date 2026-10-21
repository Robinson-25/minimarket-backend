import { z } from 'zod';

export const productoSchema = z.object({
  codigo: z.string().min(1),
  nombre: z.string().min(1),
  categoriaId: z.number().int().optional(),
  precioVenta: z.number().positive(),
  precioCompra: z.number().nonnegative().default(0),
  stock: z.number().int().default(0),
  stockMinimo: z.number().int().default(0),
  unidad: z.string().default('NIU'),
  afectoIgv: z.boolean().default(true),
});
