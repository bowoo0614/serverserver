import { CommentService } from './comment.service';
import { CreateCommentDto } from './create-comment.dto';
import { Comment } from './comment.entity';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(feedId: number, createCommentDto: CreateCommentDto): Promise<Comment>;
    findByFeedId(feedId: number): Promise<Comment[]>;
}
