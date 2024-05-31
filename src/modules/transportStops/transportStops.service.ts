import { Injectable, NotFoundException } from '@nestjs/common';
import { TransportStopRepository } from './transportStops.repository';
import { TransportStop } from './entities/transportStop.entity';

@Injectable()
export class TransportStopsService {
  constructor(
    private readonly transportStopRepository: TransportStopRepository,
  ) {}

  async getStops(): Promise<TransportStop[]> {
    try {
      return await this.transportStopRepository.findAll();
    } catch (error) {
      throw error;
    }
  }

  async getStop(id: number): Promise<TransportStop> {
    try {
      const route = await this.transportStopRepository.findOneById(id);

      if (!route) {
        throw new NotFoundException(`Stop with id: ${id} does not exist`);
      } else {
        return route;
      }
    } catch (error) {
      throw error;
    }
  }
}
