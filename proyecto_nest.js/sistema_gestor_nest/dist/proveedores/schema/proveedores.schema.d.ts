import { Document } from 'mongoose';
import { IProveedores } from '../interface/proveedores.interfaces';
export declare class Proveedores extends Document implements IProveedores {
    nombre_proveedor: string;
    email_proveedor: string;
    celular_proveedor: string;
    activo_proveedor?: boolean;
}
export declare const ProveedoresSchema: import("mongoose").Schema<Proveedores, import("mongoose").Model<Proveedores, any, any, any, Document<unknown, any, Proveedores> & Proveedores & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Proveedores, Document<unknown, {}, import("mongoose").FlatRecord<Proveedores>> & import("mongoose").FlatRecord<Proveedores> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
