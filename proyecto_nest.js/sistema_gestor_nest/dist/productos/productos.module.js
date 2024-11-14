"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const productos_services_1 = require("./services/productos.services");
const proveedores_module_1 = require("../proveedores/proveedores.module");
const clientes_module_1 = require("../clientes/clientes.module");
const productos_schema_1 = require("./schema/productos.schema");
let ProductosModule = class ProductosModule {
};
exports.ProductosModule = ProductosModule;
exports.ProductosModule = ProductosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: productos_schema_1.Productos.name, schema: productos_schema_1.ProductoSchema }]),
            proveedores_module_1.ProveedoresModule,
            clientes_module_1.ClientesModule,
        ],
        providers: [productos_services_1.ProductosServices],
        exports: [productos_services_1.ProductosServices],
    })
], ProductosModule);
//# sourceMappingURL=productos.module.js.map