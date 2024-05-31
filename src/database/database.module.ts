import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('database.postgres.host'),
        port: configService.getOrThrow('database.postgres.port'),
        username: configService.getOrThrow('database.postgres.user'),
        password: configService.getOrThrow('database.postgres.password'),
        database: configService.getOrThrow('database.postgres.database'),
        synchronize: configService.getOrThrow('database.postgres.synchronize'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
