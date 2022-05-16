import { Injectable } from '@nestjs/common';
import { WordDto, UpdateWordDto } from './dto';
import { ResponseHandler } from 'src/ultis/responseHandler';
import { IResponse } from 'src/interfaces/IResponse';

@Injectable()
export class WordService {
  get(): IResponse {
    return new ResponseHandler(true, 'Word', 200);
  }
  findOne(id: string): IResponse {
    return new ResponseHandler(true, `find word ${id}`, 200);
  }
  createWord(newWord: WordDto): IResponse {
    try {
      return new ResponseHandler(true, newWord, 201);
    } catch (error) {
      return error;
    }
  }
  update(id: string, UpdateWord: UpdateWordDto){
    return new ResponseHandler(true, `Update:${id} ${UpdateWord}`, 200);
  }
  remove(id:string){
    return new ResponseHandler(true, `Delete ${id}`, 200);
  }
}
