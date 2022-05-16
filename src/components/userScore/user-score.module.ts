import { Module } from '@nestjs/common';
import { UserWordScoreController } from './user-score.controller';
import { UserWordScoreService } from './user-score.service';

@Module({
  imports: [],
  controllers: [UserWordScoreController],
  providers: [UserWordScoreService],
})
export class UserScoreModule {}
