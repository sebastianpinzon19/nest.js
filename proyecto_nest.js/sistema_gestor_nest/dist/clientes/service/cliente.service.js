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
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cliente_schema_1 = require("../schema/cliente.schema");
let ClientesService = class ClientesService {
    constructor(clientesModel) {
        this.clientesModel = clientesModel;
    }
    async createCliente(createClientesDto) {
        const createCliente = new this.clientesModel(createClientesDto);
        return createCliente.save();
    }
    async findAll() {
        const findAllClientes = await this.clientesModel.find().exec();
        return findAllClientes;
    }
    async findOne(id) {
        const findOneCliente = await this.clientesModel.findById(id).exec();
        if (!findOneCliente) {
            throw new common_1.NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        return findOneCliente;
    }
    async update(id, updateClientesDto) {
        const updateCliente = await this.clientesModel.findByIdAndUpdate(id, updateClientesDto, { new: true }).exec();
        if (!updateCliente) {
            throw new common_1.NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        return updateCliente;
    }
    async updatePartial(id, updateClientesDto) {
        const updatePartialCliente = await this.clientesModel.findByIdAndUpdate(id, updateClientesDto, { new: true }).exec();
        if (!updatePartialCliente) {
            throw new common_1.NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        return updatePartialCliente;
    }
    async active(id) {
        const result = await this.clientesModel.findByIdAndUpdate(id, { activo_cliente: true }, { new: true })
            .exec();
        if (!result) {
            throw new common_1.NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
    }
    async deactivate(id) {
        const result = await this.clientesModel.findByIdAndUpdate(id, { activo_cliente: false }, { new: true }).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
    }
    async delete(id) {
        const deleteCliente = await this.clientesModel.findByIdAndDelete(id).exec();
        if (!deleteCliente) {
            throw new common_1.NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cliente_schema_1.Clientes.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClientesService);
//# sourceMappingURL=cliente.service.js.map