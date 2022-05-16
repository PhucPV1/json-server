import { Injectable } from '@nestjs/common';
import { RankingDto, UpdateRankingDto } from './dto';
import { ResponseHandler } from 'src/ultis/responseHandler';
import { IResponse } from 'src/interfaces/IResponse';

@Injectable()
export class RankingService {
  get(): IResponse {
    return new ResponseHandler(true, 'List Ranking', 200);
  }
  findOne(id: string): IResponse {
    return new ResponseHandler(true, `Ranking ${id}`, 200);
  }
  create(newRanking: RankingDto): IResponse {
    try {
      return new ResponseHandler(true, newRanking, 201);
    } catch (error) {
      return error;
    }
  }
  update(id: string, UserRanking: UpdateRankingDto){
    return new ResponseHandler(true, `User Ranking:${id}`, 200);
  }
  remove(id:string){
    return new ResponseHandler(true, id, 200);
  }
}
