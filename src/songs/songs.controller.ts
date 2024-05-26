import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { CreateSongDTO } from 'src/dto/create-song-dto';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Get()
  findAll() {
    return 'Hello world!';
  }

  @Post()
  addSong(@Body() createSongDTO: CreateSongDTO) {
    try {
      const result = this.songsService.createSong(createSongDTO);
      return result;
    } catch (error) {
      console.log(error);
      HttpException.toString();
    }
  }
}
