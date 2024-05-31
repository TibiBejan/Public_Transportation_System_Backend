import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportAgencyController } from './transportTrips.controller';
import { TransportTripService } from './transportTrips.service';
import { TransportTripRepository } from './transportTrips.repository';
import { TransportTrip } from './entities/transportTript.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransportTrip])],
  controllers: [TransportAgencyController],
  providers: [TransportTripService, TransportTripRepository],
  exports: [TransportTripService, TypeOrmModule],
})
export class TransportTripsModule { }
