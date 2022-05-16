import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditDto, UpdateCreditDto } from './dto';
import { IResponse } from 'src/interfaces/IResponse';

@Controller('credit')
export class CreditController {
  constructor(private readonly userCreditService: CreditService) {}

  @Get()
  getUser(): IResponse {
    return this.userCreditService.getUser();
  }
  @Get(':id')
  findOne(@Param('id') id:string){
    return this.userCreditService.findOne(id);
  }
  @Post()
  createUser(@Body() createUserCredit: CreditDto): IResponse {
    try {
      console.log(createUserCredit);
      return this.userCreditService.create(createUserCredit);
    } catch (error) {
      return error;
    }
  }

  @Patch(':id')
  update(@Param('id')id:string, @Body() updateDailyChallengeDto: UpdateCreditDto){
    return this.userCreditService.update(id, updateDailyChallengeDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string){
    return this.userCreditService.remove(id);
  }
}
