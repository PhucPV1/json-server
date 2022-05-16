import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateUserScoreDto {
  @IsOptional()
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  wordId: string;

  @IsOptional()
  @IsString()
  gameType: string;

  @IsOptional()
  @IsInt()
  score: number;

  @IsOptional()
  @IsInt()
  completionTime: number;
}
