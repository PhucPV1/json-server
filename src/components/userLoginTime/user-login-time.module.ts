import { Module } from '@nestjs/common';
import { UserLoginTimeController } from './user-login-time.controller';
import { UserLoginTimeService } from './user-login-time.service';

@Module({
  imports: [],
  controllers: [UserLoginTimeController],
  providers: [UserLoginTimeService],
})
export class UserLoginTimeModule {}
