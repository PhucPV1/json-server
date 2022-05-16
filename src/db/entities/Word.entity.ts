import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  solution: string;

  @Column()
  remainder: string;

  @Column()
  doubled: number;

  @Column()
  nature: string;

  @Column()
  definition: string;

  @Column()
  difficulty: number;

  @Column()
  dn: string;
  // list of doubled letters, example -> dn:'a,b,c'
}
