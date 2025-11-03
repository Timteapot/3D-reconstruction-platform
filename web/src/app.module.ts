import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), JobsModule],
})
export class AppModule {}
