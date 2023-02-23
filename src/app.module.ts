import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsService } from './posts/posts.service';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';

@Module({
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
  imports: [PostsModule],
})
export class AppModule {}
