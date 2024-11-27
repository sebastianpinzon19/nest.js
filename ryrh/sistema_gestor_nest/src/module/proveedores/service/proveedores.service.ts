import { Injectable, NotFoundException } from '@nestjs/common'; 
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Importamos nuestro esquema
import { Proveedores } from '../schema/proveedores.schema';
// Importamos nuestros dto's
import { CreateProveedoresDto } from '../dto/create-proveedores.dto';
import { UpdateProveedoresDto } from '../dto/update-proveedores.dto';

@Injectable()
export class ProveedoresServices{

    //Inyeccion de dependencias
    constructor(@InjectModel(Proveedores.name) private proveedorModel: Model<Proveedores>)
    {

    }


    //Metodo para crear un proveedor
    async createProveedor(createProveedorDto: CreateProveedoresDto): Promise<Proveedores>{
        const createProveedor = new this.proveedorModel(createProveedorDto);
        return createProveedor.save();
    }

    //Metodo para obtener todos los proveedores
    async findAll():Promise<Proveedores[]>{
        const findAllProveedores = await this.proveedorModel.find().exec();
        return findAllProveedores;
    }


    //Metodo para obtener un Proveedor
    async findOne(id: string): Promise<Proveedores>{
        const findOneProveedor = await this.proveedorModel.findById(id).exec();
        if(!findOneProveedor)
        {
            throw new NotFoundException(`Proveedor con Id ${id} no se encontro`);
        }
        return findOneProveedor;
    }

    // Metodo para actualizar proveedor
    async update(id: string, updateProveedoresDto: UpdateProveedoresDto): Promise<Proveedores>{
        const updateProveedor = await this.proveedorModel.findByIdAndUpdate(id, updateProveedoresDto, {new : true}).exec();
        if(!updateProveedor)
        {
            throw new NotFoundException(`Proveedor con Id ${id} no se encontro`);
        }
        return updateProveedor;
    }


    // Metodo para actualizar parcialmente un proeveedor
    async updatePartial(id: string, updateProveedoresDto: UpdateProveedoresDto): Promise<Proveedores>{
        const updatePartialProveedor = await this.proveedorModel.findByIdAndUpdate(id, updateProveedoresDto, {new : true}).exec();
        if(!updatePartialProveedor)
        {
            throw new NotFoundException(`Proveedor con Id ${id} no se encontro`);
        }
        return updatePartialProveedor;
    }

    // Metodo para desactivar un Proveedor
    async deactive(id: string): Promise<void>{
        const result = await this.proveedorModel.findByIdAndUpdate(
            id,
            {activo_proveedor: false}, //Actualiza el campo y lo pasa a falso
            {new : true}) // Retorne el documento actualizado
            .exec();
        if(!result){
            throw new NotFoundException(`Proveedor con Id ${id} no se encontro`);
        }
    }

    async active(id:string): Promise<void>{
        const result = await this.proveedorModel.findByIdAndUpdate(
            id,
            {activo_proveedor: true},
            {new : true})
            .exec();
            if(!result){
                throw new NotFoundException(`Proveedor con Id ${id} no se encontro`);
            }
        
    }


    // Metodo para eliminar un proveedor
    async delete(id: string): Promise<void>{
        const deleteProveedor = await this.proveedorModel.findByIdAndDelete(id);
        if(!deleteProveedor)
        {
            throw new NotFoundException(`Proveedor con Id ${id} no se encontro`);
        }
    }
}