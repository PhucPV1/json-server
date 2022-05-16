import { IsEmail, IsBoolean, IsOptional, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  role: string;

  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
