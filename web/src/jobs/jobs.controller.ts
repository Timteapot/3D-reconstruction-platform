import { Body, Controller, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobs: JobsService) {}

  @Post('version')
  async version() {
    return this.jobs.runVersion();
  }

  @Post('quick')
  async quick(@Body() dto: CreateJobDto) {
    return this.jobs.runQuick(dto.inputDir, dto.outDir, !!dto.highQuality);
  }
}
