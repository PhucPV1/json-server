import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Word } from './Word.entity';

@Entity()
export class DailyChallenge {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Word, (word) => word.id)
  word: Word;

  @Column()
  date: string;
}
