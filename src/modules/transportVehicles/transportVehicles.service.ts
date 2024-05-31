import { Injectable, NotFoundException } from '@nestjs/common';
import { TransportVehicleRepository } from './transportVehicle.repository';
import { TransportVehicle } from './entities/transportVehicle.entity';

@Injectable()
export class TransportVehicleService {
    constructor(
        private readonly transportVehicleRepository: TransportVehicleRepository,
    ) { }

    async getVehicles(): Promise<TransportVehicle[]> {
        try {
            return await this.transportVehicleRepository.findAll();
        } catch (error) {
            throw error;
        }
    }

    async getVehicle(id: number): Promise<TransportVehicle> {
        try {
            const route = await this.transportVehicleRepository.findOneById(id);

            if (!route) {
                throw new NotFoundException(`Vehicle with id: ${id} does not exist`);
            } else {
                return route;
            }
        } catch (error) {
            throw error;
        }
    }
}
