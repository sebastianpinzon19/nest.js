import { Clientes } from "./Clientes.type";
import { Proveedores } from "./Proveedor.type";

export interface Productos {
    _id: string;
    nombre_producto: string;
    cantidad: number;
    precio: number;
    proveedor: Proveedores[];
    cliente: Clientes[];
    activo?: boolean;
}