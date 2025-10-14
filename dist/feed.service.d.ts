import { Repository } from 'typeorm';
import { Feed } from './feed.entity';
import { CreateFeedDto } from './create-feed.dto';
export declare class FeedService {
    private feedRepository;
    constructor(feedRepository: Repository<Feed>);
    create(createFeedDto: CreateFeedDto): Promise<Feed>;
    findAll(): Promise<Feed[]>;
    findOne(id: number): Promise<Feed | null>;
}
