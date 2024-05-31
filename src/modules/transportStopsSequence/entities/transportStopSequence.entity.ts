import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IStopSequenceEntity } from '../interfaces/StopSequenceEntity.interface';

@Entity('transport_stop_sequence')
export class TransportStopSequence implements IStopSequenceEntity {
  @PrimaryColumn({ name: 'trip_id', type: 'varchar', length: 10, nullable: false })
  tripId: string;

  @PrimaryColumn({ name: 'stop_id', type: 'int', nullable: false })
  stopId: number;

  @Column({ name: 'stop_sequence', type: 'int', nullable: false })
  stopSequence: number;
}
