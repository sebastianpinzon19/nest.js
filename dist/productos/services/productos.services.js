"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosServices = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const productos_schema_1 = require("../schema/productos.schema");
const proveedores_service_1 = require("../../proveedores/service/proveedores.service");
const cliente_service_1 = require("../../clientes/service/cliente.service");
let ProductosServices = class ProductosServices {
    constructor(productosModel, proveedoresServices, clientesServices) {
        this.productosModel = productosModel;
        this.proveedoresServices = proveedoresServices;
        this.clientesServices = clientesServices;
    }
    async createProducto(createProductosDto) {
        const createProducto = new this.productosModel(createProductosDto);
        return createProducto.save();
    }
    async findAllProdutos() {
        const findAllProdutos = await this.productosModel.find().populate('proveedor').populate('cliente').exec();
        return findAllProdutos;
    }
    async findOne(id) {
        const findOneProducto = await this.productosModel.findById(id).populate('proveedor').populate('cliente').exec();
        if (!findOneProducto) {
            throw new common_1.NotFoundException(`Producto con Id ${id} no se encontro`);
        }
        return findOneProducto;
    }
    async udpate(id, updateProductosDto) {
        const updateProducto = await this.productosModel.findByIdAndUpdate(id, updateProductosDto, { new: true })
            .exec();
        if (!updateProducto) {
            throw new common_1.NotFoundException(`Producto con Id ${id} no se encontro`);
        }
        return updateProducto;
    }
    async udpatePartial(id, updateProductosDto) {
        const updatePartialProducto = await this.productosModel.findByIdAndUpdate(id, updateProductosDto, { new: true })
            .exec();
        if (!updatePartialProducto) {
            throw new common_1.NotFoundException(`Producto con Id ${id} no se encontro`);
        }
        return updatePartialProducto;
    }
    async deactive(id) {
        const deactiveProducto = await this.productosModel.findByIdAndUpdate(id, { activo: false }, { new: true })
            .populate('proveedor')
            .exec();
        if (!deactiveProducto) {
            throw new common_1.NotFoundException(`Producto con Id ${id} no se encontro`);
        }
    }
    async active(id) {
        const activeProducto = await this.productosModel.findByIdAndUpdate(id, { activo: true }, { new: true })
            .exec();
        if (!activeProducto) {
            throw new common_1.NotFoundException(`Producto con Id ${id} no se encontro`);
        }
    }
    async delete(id) {
        const deleteProducto = await this.productosModel.findByIdAndDelete(id);
        if (!deleteProducto) {
            throw new common_1.NotFoundException(`Producto con Id ${id} no se encontro`);
        }
    }
    async agregarProveedorAProducto(productoId, proveedorId) {
        const producto = await this.productosModel.findById(productoId);
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con id ${productoId} no encontrado`);
        }
        const proveedor = await this.proveedoresServices.findOne(proveedorId);
        if (!proveedor) {
            throw new common_1.NotFoundException(`Proveedor con id ${proveedorId} no encontrado`);
        }
        if (!producto.proveedor.includes(proveedorId)) {
            producto.proveedor.push(proveedorId);
        }
        else {
            throw new Error(`El proveedor ya está asociado a este producto`);
        }
        return await producto.save();
    }
    async eliminarProveedorDeProducto(productoId, proveedorId) {
        const producto = await this.productosModel.findById(productoId);
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con id ${productoId} no encontrado`);
        }
        const proveedor = await this.proveedoresServices.findOne(proveedorId);
        if (!proveedor) {
            throw new common_1.NotFoundException(`Proveedor con id ${proveedorId} no encontrado`);
        }
        const proveedorIndex = producto.proveedor.indexOf(proveedorId);
        if (proveedorIndex === -1) {
            throw new Error(`El proveedor no está asociado a este producto`);
        }
        producto.proveedor.splice(proveedorIndex, 1);
        return await producto.save();
    }
    async agregarClientesAProducto(productoId, clienteId) {
        const producto = await this.productosModel.findById(productoId);
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con id ${productoId} no encontrado`);
        }
        const cliente = await this.clientesServices.findOne(clienteId);
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente con Id ${clienteId} no asociado`);
        }
        if (!producto.cliente.includes(clienteId)) {
            producto.cliente.push(clienteId);
        }
        else {
            throw new Error(`El cliente ya está asociado a este producto`);
        }
        return producto.save();
    }
    async eliminarClientesDeProducto(productoId, clienteId) {
        const producto = await this.productosModel.findById(productoId);
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con id ${productoId} no encontrado`);
        }
        const cliente = await this.clientesServices.findOne(clienteId);
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente con Id ${clienteId} no asociado`);
        }
        const clientesIndex = producto.cliente.indexOf(clienteId);
        if (clientesIndex === -1) {
            throw new Error(`El proveedor no está asociado a este producto`);
        }
        producto.cliente.splice(clientesIndex, 1);
        return await producto.save();
    }
};
exports.ProductosServices = ProductosServices;
exports.ProductosServices = ProductosServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(productos_schema_1.Productos.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        proveedores_service_1.ProveedoresServices,
        cliente_service_1.ClientesService])
], ProductosServices);
//# sourceMappingURL=productos.services.js.map