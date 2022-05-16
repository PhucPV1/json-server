import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { RankingService } from './ranking.service';
import { RankingDto , UpdateRankingDto } from './dto';
import { IResponse } from 'src/interfaces/IResponse';

@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Get()
  get(): IResponse {
    return this.rankingService.get();
  }

  @Get(':id')
  findOne(@Param('id') id:string){
    return this.rankingService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id')id:string, @Body() updateRanking: UpdateRankingDto){
    return this.rankingService.update(id, updateRanking);
  }
  @Post()
  create(@Body() newRanking: RankingDto): IResponse {
    try {
      return this.rankingService.create(newRanking);
    } catch (error) {
      return error;
    }
  }
  @Delete(':id')
  remove(@Param('id') id: string){
    return this.rankingService.remove(id);
  }

}
