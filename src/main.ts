import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';

import { ApplicationModule } from './application.module';

async function bootstrap() {
  const application: INestApplication =
    await NestFactory.create(ApplicationModule);
  application.setGlobalPrefix('api');

  await application.listen(process.env.PORT ?? 3000);
}
bootstrap();
