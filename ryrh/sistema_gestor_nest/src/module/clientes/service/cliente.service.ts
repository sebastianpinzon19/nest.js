
import { Injectable, NotFoundException } from '@nestjs/common'; 
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Clientes } from '../schema/cliente.schema';
import { CreateClientesDto } from '../dto/create-clientes.dto';
import { UpdateClientesDto } from '../dto/update-clientes.dto';

@Injectable()
export class ClientesService {
    constructor(@InjectModel(Clientes.name) private clientesModel: Model<Clientes>) {}

    // Método para crear un nuevo cliente
    async createCliente(createClientesDto: CreateClientesDto): Promise<Clientes> {
        const createCliente = new this.clientesModel(createClientesDto);
        return createCliente.save();
    }

    // Método para obtener todos los clientes
    async findAll(): Promise<Clientes[]> {
        const findAllClientes = await this.clientesModel.find().exec();
        return findAllClientes;
    }

    // Método para obtener un cliente por ID
    async findOne(id: string): Promise<Clientes> {
        const findOneCliente = await this.clientesModel.findById(id).exec();
        if (!findOneCliente) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        return findOneCliente;
    }

    // Método para actualizar un cliente
    async update(id: string, updateClientesDto: UpdateClientesDto): Promise<Clientes> {
        const updateCliente = await this.clientesModel.findByIdAndUpdate(id, updateClientesDto, { new: true }).exec();
        if (!updateCliente) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        return updateCliente;
    }

    // Método para actualizar parcialmente un cliente
    async updatePartial(id: string, updateClientesDto: Partial<UpdateClientesDto>): Promise<Clientes> {
        const updatePartialCliente = await this.clientesModel.findByIdAndUpdate(id, updateClientesDto, { new: true }).exec();
        if (!updatePartialCliente) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        return updatePartialCliente;
    }

    async active (id:string): Promise<void>{
        const result = await this.clientesModel.findByIdAndUpdate(
            id, 
            {activo_cliente: true},
            {new : true})
            .exec();
            if(!result){
                throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
            }
    }

    // Método para desactivar un cliente
    async deactivate(id: string): Promise<void> {
        const result = await this.clientesModel.findByIdAndUpdate(
            id,
            { activo_cliente: false }, // Actualiza el campo y lo pasa a falso
            { new: true } // Retorna el documento actualizado
        ).exec();
        if (!result) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
    }

    // Método para eliminar un cliente
    async delete(id: string): Promise<void> {
        const deleteCliente = await this.clientesModel.findByIdAndDelete(id).exec();
        if (!deleteCliente) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
    }
}