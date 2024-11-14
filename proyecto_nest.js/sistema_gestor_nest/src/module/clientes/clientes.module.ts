import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesService } from './service/cliente.service';
import { Clientes, ClientesSchema } from './schema/cliente.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clientes.name, schema: ClientesSchema }]),
  ],
  providers: [ClientesService],
  exports: [ClientesService],
})
export class ClientesModule {}
