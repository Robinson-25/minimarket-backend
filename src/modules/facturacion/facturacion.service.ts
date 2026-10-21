import { env } from '../../config/env';
import { NubefactProvider } from './nubefact.provider';
import { SunatProvider } from './sunat.provider';
import { DatosComprobante, ProveedorFacturacion } from './facturacion.types';

const proveedor: ProveedorFacturacion =
  env.FACTURACION_PROVEEDOR === 'sunat' ? new SunatProvider() : new NubefactProvider();

export const emitirComprobante = (datos: DatosComprobante) => proveedor.emitir(datos);
