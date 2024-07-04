import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BASE_PATH, PORT } from './consts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.setGlobalPrefix(BASE_PATH);
  await app.listen(PORT);
}
bootstrap();
