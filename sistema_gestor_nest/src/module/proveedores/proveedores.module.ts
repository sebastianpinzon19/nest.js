import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Proveedores, ProveedoresSchema } from './schema/proveedores.schema';
import { ProveedoresServices } from './service/proveedores.service';
import { ProveedoresController } from './controller/proveedores.controller';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Proveedores.name, schema: ProveedoresSchema }]),
  ],
  providers: [ProveedoresServices],
  exports: [ProveedoresServices],
  controllers: [ProveedoresController],
})
export class ProveedoresModule {}
