import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserLoginTimeService } from './user-login-time.service';
import { UserLoginTimeDto , UpdateUserLoginTimeDto } from './dto';
import { IResponse } from 'src/interfaces/IResponse';

@Controller('user-login-time')
export class UserLoginTimeController {
  constructor(private readonly userLoginService: UserLoginTimeService) {}

  @Get()
  get(): IResponse {
    return this.userLoginService.get();
  }

  @Get(':id')
  findOne(@Param('id') id:string){
    return this.userLoginService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id')id:string, @Body() updateUserLogin: UpdateUserLoginTimeDto){
    return this.userLoginService.update(id, updateUserLogin);
  }
  @Post()
  create(@Body() newLoginTime: UserLoginTimeDto): IResponse {
    try {
      return this.userLoginService.create(newLoginTime);
    } catch (error) {
      return error;
    }
  }
  @Delete(':id')
  remove(@Param('id') id: string){
    return this.userLoginService.remove(id);
  }

}
