import { env } from '../../config/env';
import { DatosComprobante, ProveedorFacturacion, RespuestaSunat } from './facturacion.types';

// TODO: ajustar el JSON segun la documentacion vigente de Nubefact.
export class NubefactProvider implements ProveedorFacturacion {
  async emitir(datos: DatosComprobante): Promise<RespuestaSunat> {
    if (!env.NUBEFACT_URL || !env.NUBEFACT_TOKEN) {
      throw new Error('Falta configurar NUBEFACT_URL y NUBEFACT_TOKEN en el .env');
    }
    const resp = await fetch(env.NUBEFACT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: env.NUBEFACT_TOKEN },
      body: JSON.stringify({ operacion: 'generar_comprobante', ...datos }),
    });
    const json: any = await resp.json();
    return { aceptado: !json.errors, mensaje: json.errors || 'Aceptado' };
  }
}
