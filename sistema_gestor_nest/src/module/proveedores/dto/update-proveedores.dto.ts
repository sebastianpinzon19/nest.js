import { IsNotEmpty, IsString, IsBoolean } from "class-validator";

export class UpdateProveedoresDto{
    @IsNotEmpty()
    @IsString()
    nombre_proveedor?: string;

    @IsNotEmpty()
    @IsString()
    email_proveedor?: string;

    @IsNotEmpty()
    @IsString()
    celular_proveedor?: string;

    @IsBoolean()
    activo_proveedor?: boolean;
}