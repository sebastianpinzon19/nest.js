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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesSchema = exports.Clientes = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Clientes = class Clientes extends mongoose_2.Document {
};
exports.Clientes = Clientes;
__decorate([
    (0, mongoose_1.Prop)({ require: true }),
    __metadata("design:type", String)
], Clientes.prototype, "numero_identificacion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Clientes.prototype, "nombre_cliente", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Clientes.prototype, "email_cliente", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Clientes.prototype, "celular_cliente", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Clientes.prototype, "activo_cliente", void 0);
exports.Clientes = Clientes = __decorate([
    (0, mongoose_1.Schema)()
], Clientes);
exports.ClientesSchema = mongoose_1.SchemaFactory.createForClass(Clientes);
//# sourceMappingURL=cliente.schema.js.map