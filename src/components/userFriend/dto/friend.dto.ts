import { IsNotEmpty, IsString } from 'class-validator';

export class FriendDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  friendId: string;
}
