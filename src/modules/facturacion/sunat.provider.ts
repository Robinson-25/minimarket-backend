import { DatosComprobante, ProveedorFacturacion, RespuestaSunat } from './facturacion.types';

// Para el futuro: XML UBL 2.1 + firma con .pfx + envio SOAP directo a SUNAT.
export class SunatProvider implements ProveedorFacturacion {
  async emitir(_datos: DatosComprobante): Promise<RespuestaSunat> {
    throw new Error('Envio directo a SUNAT aun no implementado');
  }
}
