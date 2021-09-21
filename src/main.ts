import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(process.env.PORT || AppModule);
  await app.listen(3000);
}
bootstrap();
