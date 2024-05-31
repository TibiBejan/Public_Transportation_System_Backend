import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransportTrip } from './entities/transportTript.entity';

export class TransportTripRepository extends Repository<TransportTrip> {
  constructor(
    @InjectRepository(TransportTrip)
    private transportTripRepository: Repository<TransportTrip>,
  ) {
    super(
      transportTripRepository.target,
      transportTripRepository.manager,
      transportTripRepository.queryRunner,
    );
  }

  async findAll(): Promise<TransportTrip[]> {
    return await this.find();
  }

  async findOneById(id: string): Promise<TransportTrip | undefined> {
    return await this.findOneBy({ id: id });
  }
}
