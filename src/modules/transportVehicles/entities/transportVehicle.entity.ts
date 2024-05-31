import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IVehicleEntity } from '../interfaces/vehicleEntity.interface';

@Entity('transport_vehicle')
export class TransportVehicle implements IVehicleEntity {
    @PrimaryColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    label: string;

    @Column({ name: 'route_id', type: 'int' })
    routeId: number;

    @Column({ name: 'trip_id', type: 'varchar', length: 10 })
    tripId: string;

    @Column({ name: 'vehicle_type', type: 'int', nullable: true })
    vehicleType: number;

    @Column({ name: 'bike_accesible', type: 'varchar', length: 50, nullable: false })
    bikeAccesible: string;

    @Column({ name: 'wheelchair_accesible', type: 'varchar', length: 50, nullable: false })
    wheelchairAccesible: string;
}
