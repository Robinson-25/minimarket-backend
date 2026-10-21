import bcrypt from 'bcryptjs';
import { prisma } from '../../config/db';
import { firmarToken } from '../../utils/jwt';

export async function login(email: string, password: string) {
  const u = await prisma.usuario.findUnique({ where: { email } });
  if (!u || !u.activo || !(await bcrypt.compare(password, u.password))) {
    throw Object.assign(new Error('Correo o contraseña incorrectos'), { status: 401 });
  }
  const token = firmarToken({ id: u.id, rol: u.rol });
  return { token, usuario: { id: u.id, nombre: u.nombre, email: u.email, rol: u.rol } };
}
