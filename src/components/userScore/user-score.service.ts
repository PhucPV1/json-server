import { Injectable } from '@nestjs/common';
import { UserScoreDto, UpdateUserScoreDto } from './dto';
import { ResponseHandler } from 'src/ultis/responseHandler';
import { IResponse } from 'src/interfaces/IResponse';

@Injectable()
export class UserWordScoreService {
  get(): IResponse {
    return new ResponseHandler(true, 'List User Word Score', 200);
  }
  findOne(id: string): IResponse {
    return new ResponseHandler(true, `User Word Score ${id}`, 200);
  }
  create(newUserWordScore: UserScoreDto): IResponse {
    try {
      return new ResponseHandler(true, newUserWordScore, 201);
    } catch (error) {
      return error;
    }
  }
  update(id: string, updateUserWordScore: UpdateUserScoreDto){
    return new ResponseHandler(true, `User Word Score:${id}`, 200);
  }
  remove(id:string){
    return new ResponseHandler(true, id, 200);
  }
}
