import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { IResponse } from 'src/interfaces/IResponse';
import { ApiResponse, ApiTags, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { CreateUserEntity } from './entities/user.entities';
@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOkResponse({ description: 'ọk', type: CreateUserEntity })
  getUser(): IResponse {
    return this.userService.getUser();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDailyChallengeDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateDailyChallengeDto);
  }
  @Post()
  @ApiBody({ type: CreateUserDto })
  @ApiOkResponse({ description: 'ọk', type: CreateUserEntity })
  @ApiResponse({
    status: 300,
    description: 'A post has been successfully fetched',
    type: CreateUserEntity,
  })
  createUser(@Body() createUser: CreateUserDto): IResponse {
    try {
      console.log(createUser);
      return this.userService.createUser(createUser);
    } catch (error) {
      return error;
    }
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
