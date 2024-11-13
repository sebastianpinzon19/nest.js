import { prop, schema, schemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IProveedores } from '../interface/proveedores.interfaces';
@schema()
export class ProveedoresSchema extends Document implements IProveedores{
    @prop({required: true})
    nombre_proveedor: string;

    @prop({require: true})
    email_proveedor: string;

    @prop({require: true})
    celular_proveedor: string;

    @prop({require: true})
    activo_proveedor: boolean;
}
export const proveedoresSchema = schemaFactory.createForClass(ProveedoresSchema);