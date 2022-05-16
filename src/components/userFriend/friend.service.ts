import { Injectable } from '@nestjs/common';
import { FriendDto, UpdateFriendDto } from './dto';
import { ResponseHandler } from 'src/ultis/responseHandler';
import { IResponse } from 'src/interfaces/IResponse';

@Injectable()
export class FriendService {
  get(): IResponse {
    return new ResponseHandler(true, 'List Friend', 200);
  }
  findOne(id: string): IResponse {
    return new ResponseHandler(true, `Friend ${id}`, 200);
  }
  create(newFriend: FriendDto): IResponse {
    try {
      return new ResponseHandler(true, newFriend, 201);
    } catch (error) {
      return error;
    }
  }
  update(id: string, UserFriend: UpdateFriendDto){
    return new ResponseHandler(true, `Friend:${id}`, 200);
  }
  remove(id:string){
    return new ResponseHandler(true, id, 200);
  }
}
