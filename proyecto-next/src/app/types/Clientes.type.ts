import { Key } from "react";

export interface Clientes {
    [x: string]: Key | null | undefined;

    id_cliente: string;
    nombre_cliente: string;
    email_cliente: string;
    celular_cliente: string;
    activo_cliente?: string;
}