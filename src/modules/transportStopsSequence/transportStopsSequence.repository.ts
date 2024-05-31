import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransportStopSequence } from './entities/transportStopSequence.entity';

export class TransportStopSequenceRepository extends Repository<TransportStopSequence> {
  constructor(
    @InjectRepository(TransportStopSequence)
    private transportStopSequenceRepository: Repository<TransportStopSequence>,
  ) {
    super(
      transportStopSequenceRepository.target,
      transportStopSequenceRepository.manager,
      transportStopSequenceRepository.queryRunner,
    );
  }

  async findAllByTripId(tripId: string): Promise<TransportStopSequence[]> {
    return await this.find({ where: { tripId: tripId } });
  }
}
