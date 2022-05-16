import { Injectable } from '@nestjs/common';
import { CreditDto, UpdateCreditDto } from './dto';
import { ResponseHandler } from 'src/ultis/responseHandler';
import { IResponse } from 'src/interfaces/IResponse';

@Injectable()
export class CreditService {
  getUser(): IResponse {
    return new ResponseHandler(true, 'User Credit', 200);
  }
  findOne(id: string): IResponse {
    return new ResponseHandler(true, `find credit ${id}`, 200);
  }
  create(newCredit: CreditDto): IResponse {
    try {
      return new ResponseHandler(true, newCredit, 201);
    } catch (error) {
      return error;
    }
  }
  update(id: string, UpdateCredit: UpdateCreditDto){
    return new ResponseHandler(true, `Update:${id} ${UpdateCredit}`, 200);
  }
  remove(id:string){
    return new ResponseHandler(true, `Delete ${id}`, 200);
  }
}
