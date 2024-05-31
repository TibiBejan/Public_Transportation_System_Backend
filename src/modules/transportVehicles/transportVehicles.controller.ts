import {
    Controller,
    Param,
    Get,
    NotFoundException,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { TransportVehicleService } from './transportVehicles.service';
import { TransportVehicle } from './entities/transportVehicle.entity';

@Controller()
export class TransportVehicleController {
    constructor(private readonly transportVehicleService: TransportVehicleService) { }

    @Get('vehicles')
    public async getVehicles(): Promise<TransportVehicle[]> {
        try {
            return await this.transportVehicleService.getVehicles();
        } catch (err) {
            throw new NotFoundException('Transport vehicles not found!');
        }
    }

    @Get('vehicles/:id')
    public async getVehicle(@Param('id') id: number): Promise<TransportVehicle> {
        try {
            return await this.transportVehicleService.getVehicle(id);
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: `Transport vehicle with id ${id} not found!`,
                },
                HttpStatus.NOT_FOUND,
                {
                    cause: error,
                },
            );
        }
    }
}
