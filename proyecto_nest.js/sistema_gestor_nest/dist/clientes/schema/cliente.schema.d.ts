import { Document } from 'mongoose';
import { IClientes } from '../interface/clientes.inteface';
export declare class Clientes extends Document implements IClientes {
    numero_identificacion: string;
    nombre_cliente: string;
    email_cliente: string;
    celular_cliente: string;
    activo_cliente?: boolean;
}
export declare const ClientesSchema: import("mongoose").Schema<Clientes, import("mongoose").Model<Clientes, any, any, any, Document<unknown, any, Clientes> & Clientes & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Clientes, Document<unknown, {}, import("mongoose").FlatRecord<Clientes>> & import("mongoose").FlatRecord<Clientes> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
