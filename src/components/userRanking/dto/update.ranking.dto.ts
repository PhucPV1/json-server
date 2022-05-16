import { IsOptional, IsString } from 'class-validator';

export class UpdateRankingDto {
  @IsOptional()
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  ranking: string;
}
