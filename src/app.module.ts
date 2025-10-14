import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Feed } from './feed.entity';
import { FeedService } from './feed.service';
import { FeedController } from './feed.controller';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-1-ap-northeast-2.pooler.supabase.com',
      port: 6543,
      username: 'postgres.hupfyvybmqsymdjhpgld',
      password: process.env.DB_PASSWORD,
      database: 'postgres',
      entities: [Feed, Comment],
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),
    TypeOrmModule.forFeature([Feed, Comment]),
  ],
  controllers: [AppController, FeedController, CommentController],
  providers: [AppService, FeedService, CommentService],
})
export class AppModule {}
