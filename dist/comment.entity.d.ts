import { Feed } from './feed.entity';
export declare class Comment {
    id: number;
    content: string;
    feedId: number;
    order: number;
    feed: Feed;
}
