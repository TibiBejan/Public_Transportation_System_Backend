import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransportAgency } from './entities/transportAgency.entity';

export class TransportAgencyRepository extends Repository<TransportAgency> {
  constructor(
    @InjectRepository(TransportAgency)
    private transportAgencyRepository: Repository<TransportAgency>,
  ) {
    super(
      transportAgencyRepository.target,
      transportAgencyRepository.manager,
      transportAgencyRepository.queryRunner,
    );
  }

  async findAll(): Promise<TransportAgency[]> {
    return await this.find();
  }

  async findOneById(id: number): Promise<TransportAgency | undefined> {
    return await this.findOneBy({ id: id });
  }
}
