import { Clientes } from 'src/module/clientes/schema/cliente.schema';
export declare class UpdateProductosDto {
    nombre_producto?: string;
    cantidad?: number;
    precio?: number;
    proveedor?: string[];
    cliente?: Clientes[];
    activo?: boolean;
}
