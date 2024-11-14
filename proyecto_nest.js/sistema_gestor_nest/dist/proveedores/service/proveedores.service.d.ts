import { Model } from 'mongoose';
import { Proveedores } from '../schema/proveedores.schema';
import { CreateProveedoresDto } from '../dto/create-proveedores.dto';
import { UpdateProveedoresDto } from '../dto/update-proveedores.dto';
export declare class ProveedoresServices {
    private proveedorModel;
    constructor(proveedorModel: Model<Proveedores>);
    createProveedor(createProveedorDto: CreateProveedoresDto): Promise<Proveedores>;
    findAll(): Promise<Proveedores[]>;
    findOne(id: string): Promise<Proveedores>;
    update(id: string, updateProveedoresDto: UpdateProveedoresDto): Promise<Proveedores>;
    updatePartial(id: string, updateProveedoresDto: UpdateProveedoresDto): Promise<Proveedores>;
    deactive(id: string): Promise<void>;
    active(id: string): Promise<void>;
    delete(id: string): Promise<void>;
}
