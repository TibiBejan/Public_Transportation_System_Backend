import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransportStop } from './entities/transportStop.entity';

export class TransportStopRepository extends Repository<TransportStop> {
  constructor(
    @InjectRepository(TransportStop)
    private transportStopRepository: Repository<TransportStop>,
  ) {
    super(
      transportStopRepository.target,
      transportStopRepository.manager,
      transportStopRepository.queryRunner,
    );
  }

  async findAll(): Promise<TransportStop[]> {
    return await this.find();
  }

  async findOneById(id: number): Promise<TransportStop | undefined> {
    return await this.findOneBy({ id: id });
  }
}
