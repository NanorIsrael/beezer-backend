import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connection';

@Module({
  controllers: [SongsController],
  providers: [
    {
      provide: SongsService,
      useValue: connection,
    },
  ],
})
export class SongsModule {}
