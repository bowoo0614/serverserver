import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './create-comment.dto';
export declare class CommentService {
    private commentRepository;
    constructor(commentRepository: Repository<Comment>);
    create(feedId: number, createCommentDto: CreateCommentDto): Promise<Comment>;
    findByFeedId(feedId: number): Promise<Comment[]>;
}
