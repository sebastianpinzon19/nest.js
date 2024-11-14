import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosServices } from '../productos/services/productos.services';
import { ProductosControllers } from './controllers/productos.controllers';
import { Productos, ProductosSchema } from './schema/productos.schema';
import { ProveedoresModule } from '../proveedores/proveedores.module';
import { ProveedoresService } from '../proveedores/service/proveedores.service';
import { ClientesModule } from '../clientes/clientes.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Productos.name, schema: ProductosSchema }]), ProveedoresModule, ClientesModule],
  controllers: [ProductosControllers],
  providers: [ProductosServices, ProveedoresService],
  // exports: [ProductosServices],
})
export class ProductosModule {}
