import { IsNotEmpty, IsString, IsBoolean} from "class-validator";

export class CreateClientesDto{

    @IsNotEmpty()
    @IsString()
    numero_identificacion: string;

    @IsNotEmpty()
    @IsString()
    nombre_cliente: string;

    @IsNotEmpty()
    @IsString()
    email_cliente: string;

    @IsNotEmpty()
    @IsString()
    celular_cliente: string;

    @IsBoolean()
    activo_cliente?: boolean;
}