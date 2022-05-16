import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ResponseHandler } from 'src/ultis/responseHandler';
import { IResponse } from 'src/interfaces/IResponse';

@Injectable()
export class UserService {
  getUser(): IResponse {
    return new ResponseHandler(true, 'List User', 200);
  }
  findOne(id: string): IResponse {
    return new ResponseHandler(true, `find daily challenge ${id}`, 200);
  }
  createUser(createUser: CreateUserDto): IResponse {
    try {
      return new ResponseHandler(true, createUser, 201);
    } catch (error) {
      return error;
    }
  }
  update(id: string, User: UpdateUserDto){
    return new ResponseHandler(true, `Update:${id}`, 200);
  }
  remove(id:string){
    return new ResponseHandler(true, `Delete ${id}`, 200);
  }
}
