import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { IProductos } from "../interface/productos.interfece";
import { Clientes } from "src/module/clientes/schema/cliente.schema";
import { Proveedores } from "src/module/proveedores/schema/proveedores.schema";

@Schema()
export class Productos extends Document implements IProductos {

    @Prop({ required: true })
    nombre_producto: string;

    @Prop({ required: true })
    cantidad: number;

    @Prop({ required: true })
    precio: number;

    // Definir como un array de strings que referencia a Proveedores
    @Prop({ type: [String], ref: Proveedores.name,  })
    proveedor: string[];
    
    @Prop({ type: [String], ref: Clientes.name })
    cliente: string[];

    @Prop({ default: true })
    activo?: boolean;

}

export const ProductoSchema = SchemaFactory.createForClass(Productos);