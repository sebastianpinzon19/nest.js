import { IsNotEmpty, IsString, IsBoolean, IsOptional } from "class-validator";

export class UpdateClientesDto{

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    numero_identificacion?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    nombre_cliente?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    email_cliente?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    celular_cliente?: string;

    @IsOptional()
    @IsBoolean()
    activo_cliente?: boolean;
}