import { ProveedoresServices } from '../service/proveedores.service';
import { CreateProveedoresDto } from '../dto/create-proveedores.dto';
import { UpdateProveedoresDto } from '../dto/update-proveedores.dto';
import { Proveedores } from '../schema/proveedores.schema';
export declare class ProveedoresController {
    private readonly proveedoresService;
    constructor(proveedoresService: ProveedoresServices);
    create(createProveedorDto: CreateProveedoresDto): Promise<Proveedores>;
    deactive(id: string): Promise<void>;
    active(id: string): Promise<void>;
    delete(id: string): Promise<void>;
    findAll(): Promise<Proveedores[]>;
    findOne(id: string): Promise<Proveedores>;
    update(id: string, updateProveedoresDto: UpdateProveedoresDto): Promise<Proveedores>;
    updatePartial(id: string, updateProveedoresDto: UpdateProveedoresDto): Promise<Proveedores>;
}
