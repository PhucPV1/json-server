import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateUserLoginTimeDto {
  @IsOptional()
  @IsString()
  userId: string;

  @IsOptional()
  @IsDateString()
  lastLoginTime: Date;
}
