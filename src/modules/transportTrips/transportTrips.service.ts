import { Injectable, NotFoundException } from '@nestjs/common';
import { TransportTripRepository } from './transportTrips.repository';
import { TransportTrip } from './entities/transportTript.entity';

@Injectable()
export class TransportTripService {
  constructor(
    private readonly transportTripRepository: TransportTripRepository,
  ) { }

  async getTrips(): Promise<TransportTrip[]> {
    try {
      return await this.transportTripRepository.findAll();
      // if (agencies?.length === 0) {
      //     throw new NotFoundException('Transport agencies not found!');
      // } else {
      //     return agencies;
      // }
    } catch (error) {
      throw error;
    }
  }

  async getTrip(id: string): Promise<TransportTrip> {
    try {
      const trip = await this.transportTripRepository.findOneById(id);

      if (!trip) {
        throw new NotFoundException(`Trip with id: ${id} does not exist`);
      } else {
        return trip;
      }
    } catch (error) {
      throw error;
    }
  }
}
