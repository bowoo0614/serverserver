import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { FeedService } from './feed.service';
import { CreateFeedDto } from './dto/create-feed.dto';
import { Feed } from './entities/feed.entity';

@Controller('feeds')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Post()
  async create(@Body(ValidationPipe) createFeedDto: CreateFeedDto): Promise<Feed> {
    return this.feedService.create(createFeedDto);
  }

  @Get()
  async findAll(): Promise<Feed[]> {
    return this.feedService.findAll();
  }
}
