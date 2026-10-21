import { prisma } from '../../config/db';

// Reintenta los comprobantes PENDIENTES cada minuto.
// TODO: armar DatosComprobante desde la venta y llamar a emitirComprobante().
export function iniciarColaEnvios() {
  setInterval(async () => {
    const pendientes = await prisma.comprobante.findMany({
      where: { estado: 'PENDIENTE', intentos: { lt: 10 } },
      take: 20,
    });
    if (pendientes.length) console.log(`Comprobantes pendientes: ${pendientes.length}`);
  }, 60_000);
}
