import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    //   {
    //   cors: {
    //     origin: 'http://localhost:3000',
    //   },
    // }
  );
  app.enableCors();

  //Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Interceptors
  app.useGlobalInterceptors(new UnauthorizedInterceptor());

  await app.listen(process.env.PORTT || 8080);
}
bootstrap();
