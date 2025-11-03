import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: { origin: [/^http:\/\/localhost:\d+$/], credentials: true },
  });

  // 提前把 output 目录挂出来，之后前端可直接访问导出模型
  app.useStaticAssets(join(__dirname, '..', '..', 'output'), {
    prefix: '/assets/',
  });

  await app.listen(3000);
  console.log('Nest listening on http://localhost:3000');
}
bootstrap();
