import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feed } from './entities/feed.entity';
import { CreateFeedDto } from './dto/create-feed.dto';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(Feed)
    private feedRepository: Repository<Feed>,
  ) {}

  async create(createFeedDto: CreateFeedDto): Promise<Feed> {
    const feed = this.feedRepository.create(createFeedDto);
    return this.feedRepository.save(feed);
  }

  async findAll(): Promise<Feed[]> {
    return this.feedRepository.find({
      order: { created_at: 'DESC' }
    });
  }

  async findOne(id: number): Promise<Feed | null> {
    return this.feedRepository.findOne({ where: { id } });
  }
}
