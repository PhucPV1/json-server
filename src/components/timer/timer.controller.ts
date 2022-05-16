import { Controller, Get, Post, Body, Session } from '@nestjs/common';
import { TimerService } from './timer.service';
import { IResponse } from 'src/interfaces/IResponse';
import { ApiTags, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { StartTimerEntity } from './entities/StartTimerEntity';
import {
  ErrorFinishTimerEntity,
  FinishTimerEntity,
} from './entities/FinishTimerEntity';

@Controller('timer')
@ApiTags('Timer')
export class TimerController {
  constructor(private readonly wordService: TimerService) {}

  @Post('start')
  @ApiOkResponse({ description: 'Start timer', type: StartTimerEntity })
  startTimer(@Session() session: Record<string, any>): IResponse {
    return this.wordService.setStartTime(session);
  }
  @Post('finish')
  @ApiOkResponse({
    description: 'Finish timer and calculate completed time',
    type: FinishTimerEntity,
  })
  @ApiNotFoundResponse({
    description: 'Start time was not found',
    type: ErrorFinishTimerEntity,
  })
  finishTimer(@Session() session: Record<string, any>): IResponse {
    return this.wordService.calculateTime(session);
  }
}
