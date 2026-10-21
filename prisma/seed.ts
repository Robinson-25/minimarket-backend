import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('admin123', 10);
  await prisma.usuario.upsert({
    where: { email: 'admin@minimarket.com' },
    update: {},
    create: { nombre: 'Administrador', email: 'admin@minimarket.com', password, rol: 'ADMIN' },
  });
  await prisma.categoria.upsert({ where: { nombre: 'General' }, update: {}, create: { nombre: 'General' } });
  console.log('Listo. Usuario: admin@minimarket.com / admin123 (cambia la clave)');
}

main().finally(() => prisma.$disconnect());
