import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateCreditDto {
  @IsOptional()
  @IsString()
  wordId: string;

  @IsOptional()
  @IsNumber()
  balance: number;
}
