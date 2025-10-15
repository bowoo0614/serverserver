import { Controller, Get, Post, Body, Param, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';

@Controller('feeds/:feedId/comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async create(
    @Param('feedId', ParseIntPipe) feedId: number,
    @Body(ValidationPipe) createCommentDto: CreateCommentDto,
  ): Promise<Comment> {
    return this.commentService.create(feedId, createCommentDto);
  }

  @Get()
  async findByFeedId(@Param('feedId', ParseIntPipe) feedId: number): Promise<Comment[]> {
    return this.commentService.findByFeedId(feedId);
  }
}
