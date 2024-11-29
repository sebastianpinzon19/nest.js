import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IClientes } from '../interface/clientes.inteface';

@Schema()
export class Clientes extends Document implements IClientes{
    
    @Prop ({require: true})
    numero_identificacion: string;

    @Prop ({required: true})
    nombre_cliente: string;

    @Prop ({required: true})
    email_cliente: string;

    @Prop ({required: true})
    celular_cliente: string;

    @Prop({default: true})
    activo_cliente?: boolean;

}

export const ClientesSchema = SchemaFactory.createForClass(Clientes);