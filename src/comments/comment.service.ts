import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async create(feedId: number, createCommentDto: CreateCommentDto): Promise<Comment> {
    // 같은 피드에서 가장 큰 order 값을 찾아서 +1
    const lastComment = await this.commentRepository.findOne({
      where: { feedId },
      order: { order: 'DESC' },
    });
    
    const nextOrder = lastComment ? lastComment.order + 1 : 1;
    
    const comment = this.commentRepository.create({
      ...createCommentDto,
      feedId,
      order: nextOrder,
    });
    return this.commentRepository.save(comment);
  }

  async findByFeedId(feedId: number): Promise<Comment[]> {
    return this.commentRepository.find({
      where: { feedId },
      order: { order: 'ASC' }, // order로 정렬하여 순서대로 표시
    });
  }
}
