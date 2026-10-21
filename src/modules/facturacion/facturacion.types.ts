export interface ItemComprobante {
  codigo: string;
  descripcion: string;
  cantidad: number;
  precioUnitario: number;
  afectoIgv: boolean;
}

export interface DatosComprobante {
  tipo: 'FACTURA' | 'BOLETA' | 'NOTA_CREDITO' | 'NOTA_DEBITO';
  serie: string;
  numero: number;
  cliente: { tipoDoc: string; numeroDoc: string; nombre: string; direccion?: string };
  items: ItemComprobante[];
  total: number;
}

export interface RespuestaSunat {
  aceptado: boolean;
  mensaje: string;
  hash?: string;
  xmlPath?: string;
  cdrPath?: string;
}

export interface ProveedorFacturacion {
  emitir(datos: DatosComprobante): Promise<RespuestaSunat>;
}
