import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IRouteEntity } from '../interfaces/routeEntity.interface';

@Entity('transport_route')
export class TransportRoute implements IRouteEntity {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'agency_id', type: 'int', nullable: false })
  agencyId: number;

  @Column({
    name: 'short_name',
    type: 'varchar',
    length: 255,
    unique: true,
    nullable: false,
  })
  shortName: string;

  @Column({ name: 'long_name', type: 'varchar', length: 255, nullable: false })
  longName: string;

  @Column({ type: 'varchar', length: 10, default: '#2e3092' })
  color: string;

  @Column({ type: 'int', nullable: false })
  type: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;
}
