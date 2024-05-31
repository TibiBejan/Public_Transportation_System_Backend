import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TransportRoutesService } from './modules/transportRoutes/transportRoutes.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly transportRoutesService: TransportRoutesService,
  ) {}

  @Get()
  getHello(): { message: string } {
    return {
      message: this.appService.getHello(),
    };
  }
}
