import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { WordService } from './word.service';
import { WordDto, UpdateWordDto } from './dto';
import { IResponse } from 'src/interfaces/IResponse';

@Controller('word')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get()
  get(): IResponse {
    return this.wordService.get();
  }
  @Get(':id')
  findOne(@Param('id') id:string){
    return this.wordService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id')id:string, @Body() UpdateWord: UpdateWordDto){
    return this.wordService.update(id, UpdateWord);
  }
  @Post()
  createWord(@Body() newWord: WordDto): IResponse {
    try {
      return this.wordService.createWord(newWord);
    } catch (error) {
      return error;
    }
  }
  @Delete(':id')
  remove(@Param('id') id: string){
    return this.wordService.remove(id);
  }
}
