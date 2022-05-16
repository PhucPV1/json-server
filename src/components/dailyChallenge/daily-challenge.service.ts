import { Injectable } from '@nestjs/common';
import { DailyChallengeDto, UpdateDailyChallengeDto } from './dto';
import { ResponseHandler } from 'src/ultis/responseHandler';
import { IResponse } from 'src/interfaces/IResponse';

@Injectable()
export class DailyChallengeService {
  get(): IResponse {
    return new ResponseHandler(true, 'List daily challenge', 200);
  }
  findOne(id: string): IResponse {
    return new ResponseHandler(true, `find daily challenge ${id}`, 200);
  }
  create(newDailyChallenge: DailyChallengeDto): IResponse {
    try {
      return new ResponseHandler(true, `create new daily ${newDailyChallenge}`, 201);
    } catch (error) {
      return error;
    }
  }
  update(id: string, updateDailyChallenge: UpdateDailyChallengeDto){
    return new ResponseHandler(true, `Update:${id} ${updateDailyChallenge}`, 200);
  }
  remove(id:string){
    return new ResponseHandler(true, `Delete ${id}`, 200);
  }
}
