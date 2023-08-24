import { Module } from '@nestjs/common';
import { PlaylistModule } from './app/playlist/playlist.module';

@Module({
  imports: [PlaylistModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
