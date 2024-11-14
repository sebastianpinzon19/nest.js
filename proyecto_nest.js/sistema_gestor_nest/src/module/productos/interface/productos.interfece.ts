import { Clientes } from "src/module/clientes/schema/cliente.schema";

export interface IProductos {
    id?: string;
    nombre_producto: string;
    cantidad: number;
    precio: number;
    proveedor: string[];
    cliente: string[];
    activo?: boolean;
}