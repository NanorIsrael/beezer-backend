import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  readonly songs;

  constructor() {
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
    return this.songs;
  }
}
