import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';

export class CreateUserEntity {
  /**
   * The name of the Cat
   * @example Kitty
   */
  //   name: string;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: { role: 'player', username: 'Phuc', email: 'bintran@gmail.com', isActive: true } })
  data: CreateUserDto;

  @ApiProperty({ example: 200 })
  statusCode: number;
}
