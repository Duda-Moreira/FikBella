import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('FikBella API')
    .setDescription('API para gerenciamento da FikBella')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  app.use(
    '/docs',
    apiReference({
      content: document,
    }),
  );

  await app.listen(3000);

  console.log('🚀 API: http://localhost:3000');
  console.log('📖 Docs: http://localhost:3000/docs');
}

bootstrap();
