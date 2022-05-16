import { IsOptional, IsString } from 'class-validator';

export class UpdateFriendDto {
  @IsOptional()
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  friendId: string;
}
