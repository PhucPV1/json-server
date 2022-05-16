import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { DailyChallengeService } from './daily-challenge.service';
import { DailyChallengeDto, UpdateDailyChallengeDto } from './dto';
import { IResponse } from 'src/interfaces/IResponse';
import { ApiResponse, ApiTags, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { DailyChallengeEntity } from './entities/daily-challenge.entities';

@Controller('daily-challenge')
@ApiTags('Daily Challenge')
export class DailyChallengeController {
  constructor(private readonly dailyChallengeService: DailyChallengeService) {}

  @Get()
  @ApiOkResponse({ description: 'ọk', type: DailyChallengeEntity })
  get(): IResponse {
    return this.dailyChallengeService.get();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyChallengeService.findOne(id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDailyChallengeDto: UpdateDailyChallengeDto,
  ) {
    return this.dailyChallengeService.update(id, updateDailyChallengeDto);
  }
  @Post()
  @ApiBody({ type: DailyChallengeDto })
  @ApiOkResponse({ description: 'ọk', type: DailyChallengeEntity })
  @ApiResponse({
    status: 300,
    description: 'A post has been successfully fetched',
    type: DailyChallengeEntity,
  })
  create(@Body() newDailyChallenge: DailyChallengeDto): IResponse {
    try {
      console.log(newDailyChallenge);
      return this.dailyChallengeService.create(newDailyChallenge);
    } catch (error) {
      return error;
    }
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyChallengeService.remove(id);
  }
}
