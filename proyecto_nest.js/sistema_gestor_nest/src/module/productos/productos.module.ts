import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosServices } from './services/productos.services';
import { ProveedoresModule } from 'src/module/proveedores/proveedores.module';
import { ClientesModule } from 'src/module/clientes/clientes.module';
import { Productos, ProductoSchema } from './schema/productos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Productos.name, schema: ProductoSchema }]),
    ProveedoresModule,
    ClientesModule,
  ],
  providers: [ProductosServices],
  exports: [ProductosServices],
})
export class ProductosModule {}
