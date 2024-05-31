import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ITripEntity } from '../interfaces/tripsEntity.interface';

@Entity('transport_trip')
export class TransportTrip implements ITripEntity {
  @PrimaryColumn({ length: 10 })
  id: string;

  @Column({ name: 'route_id', type: 'int', nullable: false })
  routeId: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  headsign: string;

  @Column({ name: 'directions_id', type: 'int', nullable: false })
  directionId: number;

  @Column({ name: 'block_id', type: 'int', nullable: true })
  blockId: number;

  @Column({ name: 'shape_id', type: 'varchar', length: 10, nullable: false })
  shapeId: string;
}
