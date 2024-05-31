import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IAgencyEntity } from '../interface/agencyEntity.interface';

@Entity('transport_agency')
export class TransportAgency implements IAgencyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
    nullable: false,
  })
  url: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  timezone: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 25, nullable: false })
  lang: number;

  @Column({ name: 'fare_url', type: 'varchar', length: 255, nullable: true })
  fareUrl: string;
}
