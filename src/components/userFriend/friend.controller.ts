import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { FriendService } from './friend.service';
import { FriendDto , UpdateFriendDto } from './dto';
import { IResponse } from 'src/interfaces/IResponse';

@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Get()
  get(): IResponse {
    return this.friendService.get();
  }

  @Get(':id')
  findOne(@Param('id') id:string){
    return this.friendService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id')id:string, @Body() updateFriendDto: UpdateFriendDto){
    return this.friendService.update(id, updateFriendDto);
  }
  @Post()
  create(@Body() newFriend: FriendDto): IResponse {
    try {
      return this.friendService.create(newFriend);
    } catch (error) {
      return error;
    }
  }
  @Delete(':id')
  remove(@Param('id') id: string){
    return this.friendService.remove(id);
  }

}
