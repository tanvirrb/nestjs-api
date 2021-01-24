import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ProductsModule } from './products/products.modules';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // swagger Api Doc
  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API description')
    .setVersion('1.0')
    .setTermsOfService('TOS')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, options, { include: [ ProductsModule ],});
  SwaggerModule.setup('doc', app, document);
  await app.listen(3000);
}

bootstrap();
