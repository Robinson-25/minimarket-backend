import 'dotenv/config';
import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.coerce.number().default(3000),
  FRONTEND_URL: z.string().default('http://localhost:5173'),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string().min(16, 'JWT_SECRET debe tener al menos 16 caracteres'),
  JWT_EXPIRES: z.string().default('8h'),
  FACTURACION_PROVEEDOR: z.enum(['nubefact', 'sunat']).default('nubefact'),
  NUBEFACT_URL: z.string().optional(),
  NUBEFACT_TOKEN: z.string().optional(),
});

export const env = schema.parse(process.env);
