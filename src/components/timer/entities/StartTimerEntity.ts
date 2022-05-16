import { ApiProperty } from '@nestjs/swagger';
import { TimerDto } from '../dto/timer.dto';

export class StartTimerEntity {
  /**
   * The name of the Cat
   * @example Kitty
   */
  //   name: string;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: { startTime: new Date() } })
  data: TimerDto;

  @ApiProperty({ example: 200 })
  statusCode: number;
}
