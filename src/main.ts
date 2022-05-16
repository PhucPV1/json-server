import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('KOD Game API')
    .setDescription('KOD Game API description')
    .setVersion('1.0')
    // .addTag('cats')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'Token' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
}
bootstrap();
