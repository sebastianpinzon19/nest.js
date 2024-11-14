import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Proveedores, ProveedoresSchema } from './schema/proveedores.schema';
import { ProveedoresServices } from './service/proveedores.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Proveedores.name, schema: ProveedoresSchema }]),
  ],
  providers: [ProveedoresServices],
  exports: [ProveedoresServices],
})
export class ProveedoresModule {}
