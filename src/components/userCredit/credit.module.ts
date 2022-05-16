import { Module } from '@nestjs/common';
import { CreditController } from './credit.controller';
import { CreditService } from './credit.service';

@Module({
  imports: [],
  controllers: [CreditController],
  providers: [CreditService],
})
export class CreditModule {}
