import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configDb from '../db/config';

import { ModuleLoaderModule } from '../common/module-loader.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    configDb,
    EventEmitterModule.forRoot({ wildcard: true }),
    /**
     * Load all entity unit modules in subdirectory /db/entity
     */
    ModuleLoaderModule.register({
      name: 'db-entities',
      /**
       * Make sure the path resolves to the **DIST** subdirectory, (we are no longer in TS land but JS land!)
       */
      path: path.resolve(__dirname, '../components'),
      fileSpec: '**/*.module.js',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
