import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosServices } from './services/productos.services';
import { ProveedoresModule } from 'src/module/proveedores/proveedores.module';
import { ClientesModule } from 'src/module/clientes/clientes.module';
import { Productos, ProductoSchema } from './schema/productos.schema';
import { ProductosControllers } from './controllers/productos.controllers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Productos.name, schema: ProductoSchema }]),
    ProveedoresModule,
    ClientesModule,
  ],
  providers: [ProductosServices],
  exports: [ProductosServices],
  controllers: [ProductosControllers],

})
export class ProductosModule {}
