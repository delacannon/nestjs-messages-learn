import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // Create a valiation pipe to handle all incoming requests to our app
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000);
}
bootstrap();
