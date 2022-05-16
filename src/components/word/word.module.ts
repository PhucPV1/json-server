import { Module } from '@nestjs/common';
import { WordController } from './word.controller';
import { WordService } from './word.service';

@Module({
  imports: [],
  controllers: [WordController],
  providers: [WordService],
})
export class WordModule {}
