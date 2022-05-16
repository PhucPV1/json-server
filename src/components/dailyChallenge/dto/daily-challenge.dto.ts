import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class DailyChallengeDto {
  @IsNotEmpty()
  @IsString()
  wordId: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;
}
