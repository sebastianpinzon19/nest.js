export interface IProveedores{
    id?: string;
    nombre_proveedor: string;
    email_proveedor: string;
    celular_proveedor: string;
    activo_proveedor?: boolean;
}

export interface Proveedor {
    id: number;
    nombre: string;
    // ... otras propiedades ...
}