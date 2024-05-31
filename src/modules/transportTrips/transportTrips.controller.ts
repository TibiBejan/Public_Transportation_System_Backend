import {
  Controller,
  Param,
  Get,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TransportTripService } from './transportTrips.service';
import { TransportTrip } from './entities/transportTript.entity';

@Controller()
export class TransportAgencyController {
  constructor(private readonly transportTripService: TransportTripService) { }

  @Get('trips')
  public async getTrips(): Promise<TransportTrip[]> {
    try {
      return await this.transportTripService.getTrips();
    } catch (err) {
      throw new NotFoundException('Transport trips not found!');
    }
  }

  @Get('trips/:id')
  public async getTrip(@Param('id') id: string): Promise<TransportTrip> {
    try {
      return await this.transportTripService.getTrip(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Transport trip with id ${id} not found!`,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }
}
