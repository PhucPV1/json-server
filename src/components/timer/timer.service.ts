import { Injectable } from '@nestjs/common';
import { TimerDto } from './dto/timer.dto';
import { ResponseHandler } from 'src/ultis/responseHandler';
import { IResponse } from 'src/interfaces/IResponse';
import convertMS from 'src/ultis/convertMs';

@Injectable()
export class TimerService {
  setStartTime(session): IResponse {
    const startTime = Date.now();
    session.startTime = startTime;
    return new ResponseHandler(true, { startTime: new Date(startTime) }, 200);
  }

  calculateTime(session): IResponse {
    if (!session.startTime)
      return new ResponseHandler(
        false,
        {
          error: 'Start time was not found',
        },
        404,
      );

    const finishTime = Date.now();
    const completedTimeInMs = finishTime - session.startTime;
    const completedTime = convertMS(completedTimeInMs);
    return new ResponseHandler(
      true,
      {
        startTime: new Date(session.startTime),
        finishTime: new Date(finishTime),
        completedTime: completedTime,
      },
      200,
    );
  }
}
