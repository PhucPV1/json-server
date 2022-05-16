import { Injectable } from '@nestjs/common';
import { UserLoginTimeDto, UpdateUserLoginTimeDto } from './dto';
import { ResponseHandler } from 'src/ultis/responseHandler';
import { IResponse } from 'src/interfaces/IResponse';

@Injectable()
export class UserLoginTimeService {
  get(): IResponse {
    return new ResponseHandler(true, 'List user login time', 200);
  }
  findOne(id: string): IResponse {
    return new ResponseHandler(true, `user login time ${id}`, 200);
  }
  create(newLoginTimeUser: UserLoginTimeDto): IResponse {
    try {
      return new ResponseHandler(true, newLoginTimeUser, 201);
    } catch (error) {
      return error;
    }
  }
  update(id: string, updateLoginTimeUser: UpdateUserLoginTimeDto){
    return new ResponseHandler(true, `Login time:${id}`, 200);
  }
  remove(id:string){
    return new ResponseHandler(true, id, 200);
  }
}
