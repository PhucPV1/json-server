import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class UserLoginTimeDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsDateString()
  lastLoginTime: Date;
}
