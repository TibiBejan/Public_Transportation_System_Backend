import {
  Controller,
  Param,
  Get,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TransportStopsService } from './transportStops.service';
import { TransportStop } from './entities/transportStop.entity';

@Controller()
export class TransportStopsController {
  constructor(private readonly transportStopsService: TransportStopsService) {}

  @Get('stops')
  public async getStops(): Promise<TransportStop[]> {
    try {
      return await this.transportStopsService.getStops();
    } catch (err) {
      throw new NotFoundException('Transport stops not found!');
    }
  }

  @Get('stops/:id')
  public async getStop(@Param('id') id: number): Promise<TransportStop> {
    try {
      return await this.transportStopsService.getStop(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Transport stop with id ${id} not found!`,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }
}
