import { FeedService } from './feed.service';
import { CreateFeedDto } from './create-feed.dto';
import { Feed } from './feed.entity';
export declare class FeedController {
    private readonly feedService;
    constructor(feedService: FeedService);
    create(createFeedDto: CreateFeedDto): Promise<Feed>;
    findAll(): Promise<Feed[]>;
}
