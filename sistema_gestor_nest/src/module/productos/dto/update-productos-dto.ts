import { IsOptional, IsString, IsBoolean, IsNumber, IsArray } from 'class-validator';
import { Clientes } from 'src/module/clientes/schema/cliente.schema';
import { Types } from 'mongoose';

export class UpdateProductosDto {
    @IsOptional()
    @IsString()
    nombre_producto?: string;

    @IsOptional()
    @IsNumber()
    cantidad?: number;

    @IsOptional()
    @IsNumber()
    precio?: number;

    @IsOptional()
    @IsArray()
    proveedor?: string[];

    @IsOptional()
    @IsArray()
    cliente?: Clientes[];

    @IsOptional()
    @IsBoolean()
    activo?: boolean;
}
