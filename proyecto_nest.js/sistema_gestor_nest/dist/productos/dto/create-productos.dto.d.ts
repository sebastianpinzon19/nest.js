import { Clientes } from '../../../module/clientes/schema/cliente.schema';
export declare class CreateProductoDto {
    nombre_producto: string;
    cantidad: number;
    precio: number;
    proveedor?: string[];
    cliente?: Clientes[];
    activo?: boolean;
}
