import { Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

// Importamos nuestro esquema
import { Proveedores, proveedoresSchema } from '../schema/proveedores.schema';
// Importamos nuestras dto's
import { CreateProveedoresDto } from '../dto/create-proveedores.dto';
import { UpdateProveedoresDto } from '../dto/update-proveedores.dto';

@Injectable()
export class ProveedoresService {

    // Inyección de dependencias
    constructor(@InjectModel(Proveedores.name) private proveedorModel: Model<Proveedores>) { }

    // Método para crear un proveedor
    async createProveedor(createProveedorDto: CreateProveedoresDto): Promise<Proveedores> {
        const createProveedor = new this.proveedorModel(createProveedorDto);
        return createProveedor.save();
    }

    // Método para obtener todos los proveedores
    async findAllProveedor(): Promise<Proveedores[]> {
        const findAllProveedor = await this.proveedorModel.find().exec();
        return findAllProveedor;
    }

    // Método para obtener un proveedor
    async findOne(id: string): Promise<Proveedores> {
        const findOneProveedor = await this.proveedorModel.findById(id).exec();
        if (!findOneProveedor) {
            throw new NotAcceptableException(`proveedor con id ${id} no se encontro`);
        }
        return findOneProveedor;
    }

    // Método para actualizar un proveedor
    async update(id: string, updateProveedoresDto: UpdateProveedoresDto): Promise<Proveedores> {
        const updateProveedor = await this.proveedorModel.findByIdAndUpdate(id, updateProveedoresDto, { new: true }).exec();
        if (!updateProveedor) {
            throw new NotAcceptableException(`proveedor con id ${id} no se encontro`);
        }
        return updateProveedor;
    }

    // Método para actualizar parcialmente un proveedor
    async updatePartial(id: string, updateProveedoresDto: UpdateProveedoresDto): Promise<Proveedores> {
        const updatePartialProveedor = await this.proveedorModel.findByIdAndUpdate(id, updateProveedoresDto, { new: true }).exec();
        if (!updatePartialProveedor) {
            throw new NotAcceptableException(`proveedor con id ${id} no se encontro`);
        }
        return updatePartialProveedor;
    }

    // Método para desactivar un proveedor
    async deactivate(id: string): Promise<void> {
        const result = await this.proveedorModel.findByIdAndUpdate(
            id,
            { activo_proveedor: false }, // Actualizar el campo activo_proveedor a false
            { new: true } // Devuelve el documento actualizado
        ).exec();
        if (result) {
            throw new NotFoundException(`proveedor con id ${id} no se encontro`);
        }
    }

    // Método activar un proveedor
    async active(id: string): Promise<void> {
        const result = await this.proveedorModel.findByIdAndUpdate(
            id,
            { activo_proveedor: true },
            { new: true }
        ).exec();
        if (result) {
            throw new NotFoundException(`proveedor con id ${id} no se encontro`);
        }
    }

    // Método para eliminar un proveedor 
    async delete(id: string): Promise<void> {
        const deleteProveedor = await this.proveedorModel.findByIdAndDelete(id);
        if (!deleteProveedor) {
            throw new NotAcceptableException(`proveedor con id ${id} no se encontro`);
        }
    }

    async findAll(): Promise<Proveedores[]> {
        const proveedoresList = await this.proveedorModel.find().exec(); // Obtener todos los proveedores
        return proveedoresList; // Devolver la lista de proveedores
    }
}
