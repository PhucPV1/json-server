import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Word } from './Word.entity';
import { User } from './User.entity';

@Entity()
export class UserWordScore {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Word, (word) => word.id)
  word: Word;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column()
  gameType: string;

  @Column()
  score: number;

  @Column()
  completionTime: string;
}
