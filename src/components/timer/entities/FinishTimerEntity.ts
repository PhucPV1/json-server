import { ApiProperty } from '@nestjs/swagger';
import { TimerDto } from '../dto/timer.dto';

export class FinishTimerEntity {
  /**
   * The name of the Cat
   * @example Kitty
   */
  //   name: string;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({
    example: {
      startTime: new Date(),
      finishTime: new Date(Date.now() + 10000),
      completedTime: '00:10:00',
    },
  })
  data: TimerDto;

  @ApiProperty({ example: 200 })
  statusCode: number;
}
export class ErrorFinishTimerEntity {
  /**
   * The name of the Cat
   * @example Kitty
   */
  //   name: string;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({
    example: {
      error: 'Start time was not found',
    },
  })
  data: TimerDto;

  @ApiProperty({ example: 404 })
  statusCode: number;
}
