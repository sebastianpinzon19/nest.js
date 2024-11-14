import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IProductos } from '../interface/productos.interfece';
import { Clientes } from "src/module/clientes/schema/clientes.schema";

@Schema()
export class Productos extends Document implements IProductos {
    @Prop({ required: true })
    nombre_producto: string;

    @Prop({required : true})
    cantidad: number;

    @Prop ({required : true})
    precio: number;

    //definir como un array de string que referencia alos proveedores
    @Prop({type: [String], ref: 'Proveedores, required: true'})
    proveedores: string[];

    @Prop({type: [String], ref : 'Clientes', required: true})
    clientes: string[];

    @Prop({default: true})
    activo?: boolean;

    @Prop({ type: [String], required: true })
    proveedor: string[];

    @Prop({ type: [String], required: true })
    cliente: string[];
}

export const ProductosSchema = SchemaFactory.createForClass(Productos);