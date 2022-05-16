import { IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateWordDto {
  @IsOptional()
  @IsString()
  solution: string;

  @IsOptional()
  @IsString()
  remainder: string;
  
  @IsOptional()
  @IsString()
  nature: string;

  @IsOptional()
  @IsString()
  definition: string;
  
  @IsOptional()
  @IsInt()
  difficulty: number;

  @IsOptional()
  @IsInt()
  doubled: number;
  
  @IsOptional()
  @IsString()
  doubledLetter: string;
}
