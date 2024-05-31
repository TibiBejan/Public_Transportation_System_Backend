/*
 * Library & Utils
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
/*
 * Configuration imports
 */
import configuration from './config/configuration';
/*
 * App specific imports
 */
import { AppController } from './app.controller';
import { AppService } from './app.service';
/*
 * Modules imports
 */
import { DatabaseModule } from './database/database.module';
import { TransportAgencyModule } from './modules/transportAgency/transportAgency.module';
import { TransportRoutesModule } from './modules/transportRoutes/transportRoutes.module';
import { TransportTripsModule } from './modules/transportTrips/transportTrips.module';
import { TransportStopsModule } from './modules/transportStops/transportStops.module';
import { TransportStopsSequenceModule } from './modules/transportStopsSequence/transportStopsSequence.module';
import { TransportVehicleModule } from './modules/transportVehicles/transportVehicles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    DatabaseModule,
    TransportAgencyModule,
    TransportRoutesModule,
    TransportTripsModule,
    TransportStopsModule,
    TransportStopsSequenceModule,
    TransportVehicleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
