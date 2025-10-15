import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Feed } from './feeds/entities/feed.entity';
import { Comment } from './comments/entities/comment.entity';
import { FeedModule } from './feeds/feed.module';
import { CommentModule } from './comments/comment.module';

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
    FeedModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
