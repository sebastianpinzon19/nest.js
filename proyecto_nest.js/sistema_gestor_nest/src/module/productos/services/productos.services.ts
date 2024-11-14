import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Productos } from '../schema/productos.schema';
import { CreateProductoDto } from '../dto/create-productos.dto';
import { UpdateProductosDto } from '../dto/update-productos-dto';
import { ProveedoresService } from 'src/module/proveedores/service/proveedores.service';
import { ClientesService } from 'src/module/clientes/service/cliente.service';

@Injectable()
export class ProductosServices {
    constructor(
        @InjectModel(Productos.name) private productosModel: Model<Productos>,
        private proveedoresServices: ProveedoresService,
        private clientesServices: ClientesService
    ) {}

    async createProducto(createProductDto: CreateProductoDto): Promise<Productos> {
        const createProducto = new this.productosModel(createProductDto);
        return createProducto.save();
    }

    async findAllProductos(): Promise<Productos[]> {
        const findAllProductos = await this.productosModel.find().populate('proveedor').exec();
        return findAllProductos;
    }

    async findOne(id: string): Promise<Productos> {
        const findOneProducto = await this.productosModel.findById(id).populate('proveedor').exec();
        if (!findOneProducto) {
            throw new NotFoundException(`Producto con Id ${id} no se encontró`);
        }
        return findOneProducto;
    }

    async update(id: string, updateProductosDto: UpdateProductosDto): Promise<Productos> {
        const updateProducto = await this.productosModel.findByIdAndUpdate(
            id,
            updateProductosDto,
            { new: true }
        ).exec();
        if (!updateProducto) {
            throw new NotFoundException(`Producto con Id ${id} no se encontró`);
        }
        return updateProducto;
    }

    async updatePartial(id: string, updateProductosDto: UpdateProductosDto): Promise<Productos> {
        const updatePartialProducto = await this.productosModel.findByIdAndUpdate(
            id,
            updateProductosDto,
            { new: true }
        ).exec();
        if (!updatePartialProducto) {
            throw new NotFoundException(`Producto con Id ${id} no se encontró`);
        }
        return updatePartialProducto;
    }

    async deactive(id: string): Promise<void> {
        const deactiveProducto = await this.productosModel.findByIdAndUpdate(
            id,
            { activo: false },
            { new: true }
        ).populate('proveedor').exec();
        if (!deactiveProducto) {
            throw new NotFoundException(`Producto con Id ${id} no se encontró`);
        }
    }

    async active(id: string): Promise<void> {
        const activeProducto = await this.productosModel.findByIdAndUpdate(
            id,
            { activo: true },
            { new: true }
        ).exec();
        if (!activeProducto) {
            throw new NotFoundException(`Producto con Id ${id} no se encontró`);
        }
    }

    async delete(id: string): Promise<void> {
        const deleteProducto = await this.productosModel.findByIdAndDelete(id);
        if (!deleteProducto) {
            throw new NotFoundException(`Producto con Id ${id} no se encontró`);
        }
    }

    async agregarProveedorAProducto(productoId: string, proveedorId: string): Promise<Productos> {
        const producto = await this.productosModel.findById(productoId);
        if (!producto) {
            throw new NotFoundException(`Producto con id ${productoId} no encontrado`);
        }

        const proveedor = await this.proveedoresServices.findOne(proveedorId);
        if (!proveedor) {
            throw new NotFoundException(`Proveedor con id ${proveedorId} no encontrado`);
        }

        if (!producto.proveedor.includes(proveedorId)) {
            producto.proveedor.push(proveedorId);
        } else {
            throw new Error(`El proveedor ya está asociado a este producto`);
        }

        return await producto.save();
    }

    async eliminarProveedorDeProducto(productoId: string, proveedorId: string): Promise<Productos> {
        const producto = await this.productosModel.findById(productoId);
        if (!producto) {
            throw new NotFoundException(`Producto con id ${productoId} no encontrado`);
        }

        const proveedor = await this.proveedoresServices.findOne(proveedorId);
        if (!proveedor) {
            throw new NotFoundException(`Proveedor con id ${proveedorId} no encontrado`);
        }

        const proveedorIndex = producto.proveedor.indexOf(proveedorId);
        if (proveedorIndex === -1) {
            throw new Error(`El proveedor no está asociado a este producto`);
        }

        producto.proveedor.splice(proveedorIndex, 1);
        return await producto.save();
    }

    async agregarClientesAProducto(productoId: string, clienteId: string): Promise<Productos> {
        const producto = await this.productosModel.findById(productoId);
        if (!producto) {
            throw new NotFoundException(`Producto con id ${productoId} no encontrado`);
        }

        const cliente = await this.clientesServices.findOne(clienteId);
        if (!cliente) {
            throw new NotFoundException(`Cliente con Id ${clienteId} no asociado`);
        }

        if (!producto.cliente.includes(clienteId)) {
            producto.cliente.push(clienteId);
        } else {
            throw new Error(`El cliente ya está asociado a este producto`);
        }

        return await producto.save();
    }

    async eliminarClientesDeProducto(productoId: string, clienteId: string): Promise<Productos> {
        const producto = await this.productosModel.findById(productoId);
        if (!producto) {
            throw new NotFoundException(`Producto con id ${productoId} no encontrado`);
        }

        const cliente = await this.clientesServices.findOne(clienteId);
        if (!cliente) {
            throw new NotFoundException(`Cliente con Id ${clienteId} no asociado`);
        }

        const clientesIndex = producto.cliente.indexOf(clienteId);
        if (clientesIndex === -1) {
            throw new Error(`El cliente no está asociado a este producto`);
        }

        producto.cliente.splice(clientesIndex, 1);
        return await producto.save();
    }
}
