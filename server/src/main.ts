import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3001;
const BASE_PATH = process.env.BASE_PATH || '/api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.setGlobalPrefix(BASE_PATH);
  await app.listen(PORT);
}
bootstrap();
