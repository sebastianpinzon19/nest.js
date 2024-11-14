import { Document } from "mongoose";
import { IProductos } from "../interface/productos.interfece";
export declare class Productos extends Document implements IProductos {
    nombre_producto: string;
    cantidad: number;
    precio: number;
    proveedor: string[];
    cliente: string[];
    activo?: boolean;
}
export declare const ProductoSchema: import("mongoose").Schema<Productos, import("mongoose").Model<Productos, any, any, any, Document<unknown, any, Productos> & Productos & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Productos, Document<unknown, {}, import("mongoose").FlatRecord<Productos>> & import("mongoose").FlatRecord<Productos> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
