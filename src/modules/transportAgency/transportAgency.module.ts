import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportAgencyController } from './transportAgency.controller';
import { TransportAgencyService } from './transportAgency.service';
import { TransportAgencyRepository } from './transportAgency.repository';
import { TransportAgency } from './entities/transportAgency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransportAgency])],
  controllers: [TransportAgencyController],
  providers: [TransportAgencyService, TransportAgencyRepository],
  exports: [TransportAgencyService, TypeOrmModule],
})
export class TransportAgencyModule {}
