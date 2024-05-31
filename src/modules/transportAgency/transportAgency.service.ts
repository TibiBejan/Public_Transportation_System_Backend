import { Injectable, NotFoundException } from '@nestjs/common';
import { TransportAgencyRepository } from './transportAgency.repository';
import { TransportAgency } from './entities/transportAgency.entity';

@Injectable()
export class TransportAgencyService {
  constructor(
    private readonly transportAgencyRepository: TransportAgencyRepository,
  ) {}

  async getAgencies(): Promise<TransportAgency[]> {
    try {
      return await this.transportAgencyRepository.findAll();
      // if (agencies?.length === 0) {
      //     throw new NotFoundException('Transport agencies not found!');
      // } else {
      //     return agencies;
      // }
    } catch (error) {
      throw error;
    }
  }

  async getAgency(id: number): Promise<TransportAgency> {
    try {
      const agency = await this.transportAgencyRepository.findOneById(id);

      if (!agency) {
        throw new NotFoundException(`Agency with id: ${id} does not exist`);
      } else {
        return agency;
      }
    } catch (error) {
      throw error;
    }
  }
}
