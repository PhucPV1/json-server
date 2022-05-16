import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class UserScoreDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  wordId: string;

  @IsNotEmpty()
  @IsString()
  gameType: string;

  @IsNotEmpty()
  @IsInt()
  score: number;

  @IsNotEmpty()
  @IsInt()
  completionTime: number;
}
