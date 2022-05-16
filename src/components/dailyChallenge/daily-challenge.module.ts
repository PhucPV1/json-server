import { Module } from '@nestjs/common';
import { DailyChallengeController } from './daily-challenge.controller';
import { DailyChallengeService } from './daily-challenge.service';

@Module({
  imports: [],
  controllers: [DailyChallengeController],
  providers: [DailyChallengeService],
})
export class DailyChallengeModule {}
