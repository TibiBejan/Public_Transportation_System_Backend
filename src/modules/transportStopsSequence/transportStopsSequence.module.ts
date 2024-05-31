import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportStopsSequenceController } from './transportStopsSequence.controller';
import { TransportStopsSequenceService } from './transportStopsSequence.service';
import { TransportStopSequenceRepository } from './transportStopsSequence.repository';
import { TransportStopSequence } from './entities/transportStopSequence.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransportStopSequence])],
  controllers: [TransportStopsSequenceController],
  providers: [TransportStopsSequenceService, TransportStopSequenceRepository],
  exports: [TransportStopsSequenceService, TypeOrmModule],
})
export class TransportStopsSequenceModule { }
