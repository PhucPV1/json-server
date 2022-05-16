import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class RankingDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  ranking: string;
}
