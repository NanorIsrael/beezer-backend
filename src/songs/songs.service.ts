import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Song } from './song.entitity';
import { CreateSongDTO } from 'src/dto/create-song-dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private song: Repository<Song>,
  ) {}

  createSong(song: CreateSongDTO): Promise<Song> {
    const newsong = new Song();
    newsong.title = song.title;
    newsong.artists = song.artists;
    newsong.duration = song.duration;
    newsong.lyrics = song.lyrics;
    return this.song.save(song);
  }
}
