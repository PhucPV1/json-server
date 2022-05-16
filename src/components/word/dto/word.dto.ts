import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class WordDto {
  @IsNotEmpty()
  @IsString()
  solution: string;

  @IsNotEmpty()
  @IsString()
  remainder: string;
  
  @IsNotEmpty()
  @IsString()
  nature: string;

  @IsNotEmpty()
  @IsString()
  definition: string;
  
  @IsNotEmpty()
  @IsString()
  difficulty: string;

  @IsNotEmpty()
  @IsString()
  doubled: string;
  
  @IsNotEmpty()
  @IsString()
  doubledLetter: string;
}
