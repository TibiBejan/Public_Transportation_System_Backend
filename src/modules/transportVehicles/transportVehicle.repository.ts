import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransportVehicle } from './entities/transportVehicle.entity';

export class TransportVehicleRepository extends Repository<TransportVehicle> {
    constructor(
        @InjectRepository(TransportVehicle)
        private transportVehicleRepository: Repository<TransportVehicle>,
    ) {
        super(
            transportVehicleRepository.target,
            transportVehicleRepository.manager,
            transportVehicleRepository.queryRunner,
        );
    }

    async findAll(): Promise<TransportVehicle[]> {
        return await this.find();
    }

    async findOneById(id: number): Promise<TransportVehicle | undefined> {
        return await this.findOneBy({ id: id });
    }
}
