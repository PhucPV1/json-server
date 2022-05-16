import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserWordScoreService } from './user-score.service';
import { UserScoreDto , UpdateUserScoreDto } from './dto';
import { IResponse } from 'src/interfaces/IResponse';

@Controller('user-score')
export class UserWordScoreController {
  constructor(private readonly userWordScore: UserWordScoreService) {}

  @Get()
  get(): IResponse {
    return this.userWordScore.get();
  }

  @Get(':id')
  findOne(@Param('id') id:string){
    return this.userWordScore.findOne(id);
  }
  @Patch(':id')
  update(@Param('id')id:string, @Body() updateUserScore: UpdateUserScoreDto){
    return this.userWordScore.update(id, updateUserScore);
  }
  @Post()
  create(@Body() newUserScore: UserScoreDto): IResponse {
    try {
      return this.userWordScore.create(newUserScore);
    } catch (error) {
      return error;
    }
  }
  @Delete(':id')
  remove(@Param('id') id: string){
    return this.userWordScore.remove(id);
  }

}
