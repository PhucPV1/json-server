import { IsNotEmpty, IsString, IsInt, IsEmail, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, default: 'player' })
  role: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, default: 'phuc' })
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, default: 'bintran@gmail.com' })
  email: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({ type: String, default: true })
  isActive: boolean;

}
