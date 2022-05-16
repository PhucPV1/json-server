import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreditDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsNumber()
  balance: number;
}
