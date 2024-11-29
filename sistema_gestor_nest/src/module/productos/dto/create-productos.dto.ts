import { IsString, IsNumber, IsOptional, IsArray, ArrayNotEmpty } from 'class-validator';
import { Clientes } from '../../../module/clientes/schema/cliente.schema';

export class CreateProductoDto {
    @IsString()
    nombre_producto: string;

    @IsNumber()
    cantidad: number;

    @IsNumber()
    precio: number;

    // El campo de proveedores es opcional cuando creamos un producto
    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    proveedor?: string[]; // Es un array de ObjectIds que hace referencia a los proveedores

    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    cliente?: Clientes[];

    @IsOptional()
    activo?: boolean;
}
