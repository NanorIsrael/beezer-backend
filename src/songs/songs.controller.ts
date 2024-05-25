import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSongDTO } from 'src/dto/create-song-dto';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(readonly songsService: SongsService) {}
  @Get()
  findAll() {
    return 'Hello world!';
  }

  @Post()
  addSong(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.addSong(createSongDTO);
  }
}
