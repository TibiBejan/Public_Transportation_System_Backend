import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportRoutesController } from './transportRoutes.controller';
import { TransportRoutesService } from './transportRoutes.service';
import { TransportRouteRepository } from './transportRoutes.repository';
import { TransportRoute } from './entities/transportRoute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransportRoute])],
  controllers: [TransportRoutesController],
  providers: [TransportRoutesService, TransportRouteRepository],
  exports: [TransportRoutesService, TypeOrmModule],
})
export class TransportRoutesModule {}
