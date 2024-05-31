import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportVehicleController } from './transportVehicles.controller';
import { TransportVehicleService } from './transportVehicles.service';
import { TransportVehicleRepository } from './transportVehicle.repository';
import { TransportVehicle } from './entities/transportVehicle.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TransportVehicle])],
    controllers: [TransportVehicleController],
    providers: [TransportVehicleService, TransportVehicleRepository],
    exports: [TransportVehicleService, TypeOrmModule],
})
export class TransportVehicleModule { }