import { ApiProperty } from '@nestjs/swagger';
import { TransactionAlreadyStartedError } from 'typeorm';
import { DailyChallengeDto } from '../dto/daily-challenge.dto';

export class DailyChallengeEntity {
  /**
   * The name of the Cat
   * @example Kitty
   */
  //   name: string;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: { wordId: 'id1', date: new Date().toISOString() } })
  data: DailyChallengeDto;

  @ApiProperty({ example: 200 })
  statusCode: number;
}
