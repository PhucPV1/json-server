import { IsDateString, IsEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateDailyChallengeDto {
  @IsOptional()
  @IsString()
  wordId: string;

  @IsOptional()
  @IsDateString()
  date: Date;
}
