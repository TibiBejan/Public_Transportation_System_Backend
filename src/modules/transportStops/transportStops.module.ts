import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportStopsController } from './transportStops.controller';
import { TransportStopsService } from './transportStops.service';
import { TransportStopRepository } from './transportStops.repository';
import { TransportStop } from './entities/transportStop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransportStop])],
  controllers: [TransportStopsController],
  providers: [TransportStopsService, TransportStopRepository],
  exports: [TransportStopsService, TypeOrmModule],
})
export class TransportStopsModule {}
