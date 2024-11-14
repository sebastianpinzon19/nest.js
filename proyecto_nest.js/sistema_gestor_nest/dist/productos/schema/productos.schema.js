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
exports.ProductoSchema = exports.Productos = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cliente_schema_1 = require("../../clientes/schema/cliente.schema");
const proveedores_schema_1 = require("../../proveedores/schema/proveedores.schema");
let Productos = class Productos extends mongoose_2.Document {
};
exports.Productos = Productos;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Productos.prototype, "nombre_producto", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Productos.prototype, "cantidad", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Productos.prototype, "precio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], ref: proveedores_schema_1.Proveedores.name, }),
    __metadata("design:type", Array)
], Productos.prototype, "proveedor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], ref: cliente_schema_1.Clientes.name }),
    __metadata("design:type", Array)
], Productos.prototype, "cliente", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Productos.prototype, "activo", void 0);
exports.Productos = Productos = __decorate([
    (0, mongoose_1.Schema)()
], Productos);
exports.ProductoSchema = mongoose_1.SchemaFactory.createForClass(Productos);
//# sourceMappingURL=productos.schema.js.map