import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OnEvent } from '@nestjs/event-emitter';
import {
  IModuleDynLoaderEvent,
  EV_MODULE_DYN_LOADER,
} from '../common/module-loader.defs';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    return this.configService.get('greeting') || 'KOD Game';
  }

  @OnEvent(EV_MODULE_DYN_LOADER + '*', { async: true })
  /**
   * Get notifield when modules are loaded
   */
  async handleOnEventLoad(payload: IModuleDynLoaderEvent) {
    if (payload.error) {
      this.logger.log(`**Modules load ERROR: "${payload.error}" **`);
    } else {
      this.logger.log(
        `**Modules sucessfully loaded: "${
          payload.name
        } => (${payload.moduleNames.toString()})" **`,
      );
    }
  }
}
