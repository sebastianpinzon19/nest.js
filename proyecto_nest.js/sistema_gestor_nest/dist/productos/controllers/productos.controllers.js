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
exports.ProductosControllers = void 0;
const common_1 = require("@nestjs/common");
const productos_services_1 = require("../services/productos.services");
const create_productos_dto_1 = require("../dto/create-productos.dto");
const update_productos_dto_1 = require("../dto/update-productos-dto");
let ProductosControllers = class ProductosControllers {
    constructor(productosServices) {
        this.productosServices = productosServices;
    }
    async create(createProductosDto) {
        return this.productosServices.createProducto(createProductosDto);
    }
    async deactive(id) {
        await this.productosServices.deactive(id);
    }
    async active(id) {
        await this.productosServices.active(id);
    }
    async delete(id) {
        await this.productosServices.delete(id);
    }
    async findAll() {
        return await this.productosServices.findAllProdutos();
    }
    async findOne(id) {
        console.log('ID recibido:', id);
        return await this.productosServices.findOne(id);
    }
    async udpate(id, updateProductosDto) {
        const updateProducto = await this.productosServices.udpate(id, updateProductosDto);
        if (!updateProducto) {
            throw new common_1.NotFoundException(`Producto con Id ${id} no se encontro`);
        }
        return updateProducto;
    }
    async udpatePartial(id, updateProductosDto) {
        const updatePartialProducto = await this.productosServices.udpatePartial(id, updateProductosDto);
        if (!updatePartialProducto) {
            throw new common_1.NotFoundException(`Producto con Id ${id} no se encontro`);
        }
        return updatePartialProducto;
    }
    async agregarProveedorProducto(productoId, proveedorId) {
        return await this.productosServices.agregarProveedorAProducto(productoId, proveedorId);
    }
    async eliminarProveedorProducto(productoId, proveedorId) {
        return await this.productosServices.eliminarProveedorDeProducto(productoId, proveedorId);
    }
    async agregarClienteAProducto(productoId, clienteId) {
        return await this.productosServices.agregarClientesAProducto(productoId, clienteId);
    }
    async eliminarCLienteDeProducto(productoId, clienteId) {
        return await this.productosServices.eliminarClientesDeProducto(productoId, clienteId);
    }
};
exports.ProductosControllers = ProductosControllers;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_productos_dto_1.CreateProductoDto]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "create", null);
__decorate([
    (0, common_1.Put)('deactive/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "deactive", null);
__decorate([
    (0, common_1.Put)('active/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "active", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_productos_dto_1.UpdateProductosDto]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "udpate", null);
__decorate([
    (0, common_1.Patch)('updatePartial/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_productos_dto_1.UpdateProductosDto]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "udpatePartial", null);
__decorate([
    (0, common_1.Patch)(':productoId/proveedores/:proveedorId'),
    __param(0, (0, common_1.Param)('productoId')),
    __param(1, (0, common_1.Param)('proveedorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "agregarProveedorProducto", null);
__decorate([
    (0, common_1.Patch)(':productoId/proveedores/:proveedorId/eliminar'),
    __param(0, (0, common_1.Param)('productoId')),
    __param(1, (0, common_1.Param)('proveedorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "eliminarProveedorProducto", null);
__decorate([
    (0, common_1.Patch)(':productoId/clientes/:clienteId'),
    __param(0, (0, common_1.Param)('productoId')),
    __param(1, (0, common_1.Param)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "agregarClienteAProducto", null);
__decorate([
    (0, common_1.Patch)(':productoId/clientes/:clienteId/eliminar'),
    __param(0, (0, common_1.Param)('productoId')),
    __param(1, (0, common_1.Param)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductosControllers.prototype, "eliminarCLienteDeProducto", null);
exports.ProductosControllers = ProductosControllers = __decorate([
    (0, common_1.Controller)('productos'),
    __metadata("design:paramtypes", [productos_services_1.ProductosServices])
], ProductosControllers);
//# sourceMappingURL=productos.controllers.js.map