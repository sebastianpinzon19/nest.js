import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProveedoresModule } from './proveedores/proveedores.module';

@Module({
  imports: [ProveedoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
