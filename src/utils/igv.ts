export const TASA_IGV = 0.18;

export const redondear = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

// precio con IGV incluido -> subtotal e igv
export function desglosarIgv(totalConIgv: number) {
  const subtotal = redondear(totalConIgv / (1 + TASA_IGV));
  const igv = redondear(totalConIgv - subtotal);
  return { subtotal, igv, total: redondear(totalConIgv) };
}
