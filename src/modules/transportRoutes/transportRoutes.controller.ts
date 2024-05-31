import {
  Controller,
  Param,
  Get,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TransportRoutesService } from './transportRoutes.service';
import { TransportRoute } from './entities/transportRoute.entity';

@Controller()
export class TransportRoutesController {
  constructor(
    private readonly transportRoutesService: TransportRoutesService,
  ) {}

  @Get('routes')
  public async getRoutes(): Promise<TransportRoute[]> {
    try {
      return await this.transportRoutesService.getRoutes();
    } catch (err) {
      throw new NotFoundException('Transport routes not found!');
    }
  }

  @Get('routes/:id')
  public async getRoute(@Param('id') id: number): Promise<TransportRoute> {
    try {
      return await this.transportRoutesService.getRoute(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Transport route with id ${id} not found!`,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  // @Post('routes')
  // public createRoute(
  //   @Body() createRouteDto: CreateRouteDto,
  // ): Promise<TransportRoute> {
  //   try {
  //     return this.transportRoutesService.createRoute(createRouteDto);
  //   } catch (error) {
  //     throw Error(error);
  //   }
  // }

  // @Post('routes-collection')
  // public async createRoutes(@Body() routes: CreateRouteDto[]): Promise<InsertResult> {
  //   try {
  //     return this.transportRoutesService.createRoutes(routes);
  //   } catch (error) {
  //     throw Error(error);
  //   }
  // }

  // @Put('routes/:id')
  // public replaceRoute(
  //   @Param('id') id: number,
  //   @Body() replaceRouteDto: ReplaceRouteDto,
  // ): Promise<TransportRoute | undefined> {
  //   return this.transportRoutesService.replaceRoute(id, replaceRouteDto);
  // }

  // @Patch('routes/:id')
  // public updateRoute(
  //   @Param('id') id: number,
  //   @Body() updateRouteDto: UpdateRouteDto,
  // ): Promise<TransportRoute | undefined> {
  //   return this.transportRoutesService.updateRoute(id, updateRouteDto);
  // }

  // @Delete('routes/:id')
  // public deleteRoute(@Param('id') id: number): Promise<DeleteResult> {
  //   return this.transportRoutesService.deleteRoute(id);
  // }
}
