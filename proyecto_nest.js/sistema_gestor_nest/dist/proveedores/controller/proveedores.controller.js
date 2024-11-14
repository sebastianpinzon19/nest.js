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
exports.ProveedoresController = void 0;
const common_1 = require("@nestjs/common");
const proveedores_service_1 = require("../service/proveedores.service");
const create_proveedores_dto_1 = require("../dto/create-proveedores.dto");
const update_proveedores_dto_1 = require("../dto/update-proveedores.dto");
const proveedores_schema_1 = require("../schema/proveedores.schema");
const swagger_1 = require("@nestjs/swagger");
let ProveedoresController = class ProveedoresController {
    constructor(proveedoresService) {
        this.proveedoresService = proveedoresService;
    }
    async create(createProveedorDto) {
        return this.proveedoresService.createProveedor(createProveedorDto);
    }
    async deactive(id) {
        await this.proveedoresService.deactive(id);
    }
    async active(id) {
        await this.proveedoresService.active(id);
    }
    async delete(id) {
        await this.proveedoresService.delete(id);
    }
    async findAll() {
        return await this.proveedoresService.findAll();
    }
    async findOne(id) {
        return await this.proveedoresService.findOne(id);
    }
    async update(id, updateProveedoresDto) {
        const updateProveedor = await this.proveedoresService.update(id, updateProveedoresDto);
        if (!updateProveedor) {
            throw new common_1.NotFoundException(`Proveedor con Id ${id} no se encontró`);
        }
        return updateProveedor;
    }
    async updatePartial(id, updateProveedoresDto) {
        const updatePartialProveedor = await this.proveedoresService.updatePartial(id, updateProveedoresDto);
        if (!updatePartialProveedor) {
            throw new common_1.NotFoundException(`Proveedor con Id ${id} no se encontró`);
        }
        return updatePartialProveedor;
    }
};
exports.ProveedoresController = ProveedoresController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo proveedor' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'El proveedor ha sido creado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiBody)({
        description: 'Cuerpo de solicitud para crear un nuevo proveedor',
        examples: {
            example: {
                summary: 'Ejemplo de creación',
                value: {
                    nombre_proveedor: 'Nombre_Proveedor',
                    email_proveedor: 'proveedor@gmail.com',
                    celular_proveedor: '1234567890',
                },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_proveedores_dto_1.CreateProveedoresDto]),
    __metadata("design:returntype", Promise)
], ProveedoresController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('deactive/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Desactivar un proveedor' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Proveedor desactivado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No se encuentra el proveedor' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Id del proveedor que desea desactivar',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProveedoresController.prototype, "deactive", null);
__decorate([
    (0, common_1.Put)('active/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Activar un proveedor' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Proveedor activado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No se encuentra el proveedor' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Id del proveedor que desea activar',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProveedoresController.prototype, "active", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un proveedor' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Proveedor eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No se encuentra el proveedor' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Id del proveedor que desea eliminar',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProveedoresController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los proveedores' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de proveedores', type: [proveedores_schema_1.Proveedores] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paises no encontrados' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProveedoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un proveedor por su Id' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Proveedor encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No se encuentra el proveedor' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Id del proveedor que desea obtener',
        type: String,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProveedoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un proveedor' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'El proveedor ha sido actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No se encuentra el proveedor' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiBody)({
        description: 'Cuerpo de solicitud para actualizar un nuevo proveedor',
        examples: {
            example: {
                summary: 'Ejemplo de actualización',
                value: {
                    nombre_proveedor: 'Proveedor_actualizado',
                    email_proveedor: 'proveedordupdate@gmail.com',
                    celular_proveedor: '1234567890',
                },
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_proveedores_dto_1.UpdateProveedoresDto]),
    __metadata("design:returntype", Promise)
], ProveedoresController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('updatePartial/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un proveedor parcialmente' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'El proveedor ha sido actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'No se encuentra el proveedor' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Solicitud incorrecta' }),
    (0, swagger_1.ApiBody)({
        description: 'Cuerpo de solicitud para actualizar un nuevo proveedor',
        examples: {
            example: {
                summary: 'Ejemplo de actualización',
                value: {
                    nombre_proveedor: 'Proveedor_actualizacionParcial',
                    email_proveedor: 'proveedordupdateparcial@gmail.com',
                    celular_proveedor: '12345674534',
                },
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_proveedores_dto_1.UpdateProveedoresDto]),
    __metadata("design:returntype", Promise)
], ProveedoresController.prototype, "updatePartial", null);
exports.ProveedoresController = ProveedoresController = __decorate([
    (0, swagger_1.ApiTags)('proveedor'),
    (0, common_1.Controller)('proveedores'),
    __metadata("design:paramtypes", [proveedores_service_1.ProveedoresServices])
], ProveedoresController);
//# sourceMappingURL=proveedores.controller.js.map