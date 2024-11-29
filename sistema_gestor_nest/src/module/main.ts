import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilite CORS
  app.enableCors({
    origin: '*', // Permite todas las solicitudes de cualquier origen. Cambie esto para mayor seguridad.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Accept, Authorization', // Cabeceros permitidos
  });

  // @gt establece el prefijo global 'api'
  app.setGlobalPrefix('api');

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API Sistema de Gestión')
    .setDescription('Se verán las APIs de nuestro sistema')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Configura Swagger en el endpoint '/api'
  
  console.log('Documentación de Swagger está disponible en http://localhost:2000/api');

  await app.listen(2000);
}
bootstrap();
