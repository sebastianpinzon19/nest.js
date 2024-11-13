import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProveedoresService } from './service/proveedores.service';
import { ProveedoresController } from './controller/proveedores.controller';
import { ProveedoresSchema } from './schema/proveedores.schema';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'Proveedores.name',
        schema: ProveedoresSchema,
    }])],
    controllers: [ProveedoresController],
    providers: [ProveedoresService],
})
export class ProveedoresModule {}
