import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { appConfig } from './config/app.config';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(appConfig.cors);

  app.useGlobalPipes(new ValidationPipe(appConfig.validationPipe));

  await app.listen(appConfig.port, () =>
    console.log(`🚀 Server runs on port ${appConfig.port}`),
  );
}

bootstrap();
