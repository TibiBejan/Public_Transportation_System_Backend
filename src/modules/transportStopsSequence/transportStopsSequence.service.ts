import { Injectable } from '@nestjs/common';
import { TransportStopSequenceRepository } from './transportStopsSequence.repository';
import { TransportStopSequence } from './entities/transportStopSequence.entity';

@Injectable()
export class TransportStopsSequenceService {
  constructor(
    private readonly transportStopSequenceRepository: TransportStopSequenceRepository,
  ) { }

  async getStopsSequence(tripId: string): Promise<TransportStopSequence[]> {
    try {
      return await this.transportStopSequenceRepository.findAllByTripId(tripId);
    } catch (error) {
      throw error;
    }
  }
}
