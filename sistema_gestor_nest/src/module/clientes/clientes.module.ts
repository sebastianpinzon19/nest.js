import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesService } from './service/cliente.service';
import { Clientes, ClientesSchema } from './schema/cliente.schema';
import { ClientesController } from './controller/clientes.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clientes.name, schema: ClientesSchema }]),
  ],
  providers: [ClientesService],
  exports: [ClientesService],
  controllers: [ClientesController],
})
export class ClientesModule {}
