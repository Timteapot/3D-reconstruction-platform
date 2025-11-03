import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { spawn, ChildProcessWithoutNullStreams } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

@Injectable()
export class JobsService {
  constructor(private readonly config: ConfigService) {}

  runVersion(): Promise<{
    ok: boolean;
    code: number | null;
    stdout: string;
    stderr: string;
  }> {
    return new Promise((resolve) => {
      const rcExe = this.config.get<string>('RC_EXE');
      if (!rcExe) {
        resolve({
          ok: false,
          code: null,
          stdout: '',
          stderr: 'RC_EXE not set in .env',
        });
        return;
      }

      const args = ['-version'];
      const child: ChildProcessWithoutNullStreams = spawn(rcExe, args, {
        shell: false,
      });

      let out = '';
      let err = '';

      child.stdout.on('data', (d: Buffer) => (out += d.toString('utf8')));
      child.stderr.on('data', (d: Buffer) => (err += d.toString('utf8')));

      child.on('close', (code) => {
        resolve({ ok: code === 0, code, stdout: out, stderr: err });
      });
    });
  }

  runQuick(
    inputDir: string,
    outDir: string,
  ): Promise<{
    ok: boolean;
    code: number | null;
    cmd: string;
    stdout: string;
    stderr: string;
  }> {
    return new Promise((resolve) => {
      const rcExe = this.config.get<string>('RC_EXE');
      if (!rcExe) {
        resolve({
          ok: false,
          code: null,
          cmd: '',
          stdout: '',
          stderr: 'RC_EXE not set in .env',
        });
        return;
      }

      if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
      const modelPath = join(outDir, 'model.obj');
      inputDir = 'D:\\Desktop\\reconstruction\\input';
      const args = [
        '-newScene',
        '-addFolder',
        inputDir,
        '-align',
        '-mvs',
        '-calculateTexture',
        '-calculatePreviewModel',
        '-exportModel 模型1',
        modelPath,
        '-quit',
      ];

      const child: ChildProcessWithoutNullStreams = spawn(rcExe, args, {
        shell: false,
      });

      let out = '';
      let err = '';

      child.stdout.on('data', (d: Buffer) => (out += d.toString('utf8')));
      child.stderr.on('data', (d: Buffer) => (err += d.toString('utf8')));

      child.on('close', (code) => {
        resolve({
          ok: code === 0,
          code,
          cmd: `${rcExe} ${args.join(' ')}`,
          stdout: out,
          stderr: err,
        });
      });
    });
  }
}
