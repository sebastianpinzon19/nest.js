import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [ProveedoresModule, ProductosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
