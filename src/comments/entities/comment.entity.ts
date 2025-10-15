import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Feed } from 'src/feeds/entities/feed.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @Column()
  feedId: number;

  @Column()
  order: number;

  @ManyToOne(() => Feed)
  @JoinColumn({ name: 'feedId' })
  feed: Feed;
}
