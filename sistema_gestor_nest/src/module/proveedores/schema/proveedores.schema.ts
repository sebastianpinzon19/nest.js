import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IProveedores } from '../interface/proveedores.interfaces';
@Schema()
export class Proveedores extends Document implements IProveedores{
    @Prop({required: true})
    nombre_proveedor: string;

    @Prop({required: true})
    email_proveedor: string;

    @Prop({required: true})
    celular_proveedor: string;

    @Prop({default: true})
    activo_proveedor?:boolean;
}
export const ProveedoresSchema = SchemaFactory.createForClass(Proveedores);