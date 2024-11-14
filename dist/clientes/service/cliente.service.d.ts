import { Model } from 'mongoose';
import { Clientes } from '../schema/cliente.schema';
import { CreateClientesDto } from '../dto/create-clientes.dto';
import { UpdateClientesDto } from '../dto/update-clientes.dto';
export declare class ClientesService {
    private clientesModel;
    constructor(clientesModel: Model<Clientes>);
    createCliente(createClientesDto: CreateClientesDto): Promise<Clientes>;
    findAll(): Promise<Clientes[]>;
    findOne(id: string): Promise<Clientes>;
    update(id: string, updateClientesDto: UpdateClientesDto): Promise<Clientes>;
    updatePartial(id: string, updateClientesDto: Partial<UpdateClientesDto>): Promise<Clientes>;
    active(id: string): Promise<void>;
    deactivate(id: string): Promise<void>;
    delete(id: string): Promise<void>;
}
