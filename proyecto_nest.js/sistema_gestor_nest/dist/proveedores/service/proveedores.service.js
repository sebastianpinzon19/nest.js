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
exports.ProveedoresServices = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const proveedores_schema_1 = require("../schema/proveedores.schema");
let ProveedoresServices = class ProveedoresServices {
    constructor(proveedorModel) {
        this.proveedorModel = proveedorModel;
    }
    async createProveedor(createProveedorDto) {
        const createProveedor = new this.proveedorModel(createProveedorDto);
        return createProveedor.save();
    }
    async findAll() {
        const findAllProveedores = await this.proveedorModel.find().exec();
        return findAllProveedores;
    }
    async findOne(id) {
        const findOneProveedor = await this.proveedorModel.findById(id).exec();
        if (!findOneProveedor) {
            throw new common_1.NotFoundException(`Proveedor con Id ${id} no se encontro`);
        }
        return findOneProveedor;
    }
    async update(id, updateProveedoresDto) {
        const updateProveedor = await this.proveedorModel.findByIdAndUpdate(id, updateProveedoresDto, { new: true }).exec();
        if (!updateProveedor) {
            throw new common_1.NotFoundException(`Proveedor con Id ${id} no se encontro`);
        }
        return updateProveedor;
    }
    async updatePartial(id, updateProveedoresDto) {
        const updatePartialProveedor = await this.proveedorModel.findByIdAndUpdate(id, updateProveedoresDto, { new: true }).exec();
        if (!updatePartialProveedor) {
            throw new common_1.NotFoundException(`Proveedor con Id ${id} no se encontro`);
        }
        return updatePartialProveedor;
    }
    async deactive(id) {
        const result = await this.proveedorModel.findByIdAndUpdate(id, { activo_proveedor: false }, { new: true })
            .exec();
        if (!result) {
            throw new common_1.NotFoundException(`Proveedor con Id ${id} no se encontro`);
        }
    }
    async active(id) {
        const result = await this.proveedorModel.findByIdAndUpdate(id, { activo_proveedor: true }, { new: true })
            .exec();
        if (!result) {
            throw new common_1.NotFoundException(`Proveedor con Id ${id} no se encontro`);
        }
    }
    async delete(id) {
        const deleteProveedor = await this.proveedorModel.findByIdAndDelete(id);
        if (!deleteProveedor) {
            throw new common_1.NotFoundException(`Proveedor con Id ${id} no se encontro`);
        }
    }
};
exports.ProveedoresServices = ProveedoresServices;
exports.ProveedoresServices = ProveedoresServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(proveedores_schema_1.Proveedores.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProveedoresServices);
//# sourceMappingURL=proveedores.service.js.map