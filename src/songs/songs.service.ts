import { Inject, Injectable } from '@nestjs/common';
import { Connection } from 'src/common/constants/connection';

@Injectable()
export class SongsService {
  readonly songs;

  constructor(
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
    return this.songs;
  }
}
