import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IStopEntity } from '../interfaces/StopEntity.interface';

@Entity('transport_stop')
export class TransportStop implements IStopEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'double precision', nullable: false })
  lat: number;

  @Column({ type: 'double precision', nullable: false })
  lon: number;

  @Column({ name: 'location_type', type: 'int', nullable: false })
  locationType: number;

  @Column({ name: 'stop_code', type: 'varchar', length: 50, nullable: false })
  stopCode: string;
}
