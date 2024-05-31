import { Injectable, NotFoundException } from '@nestjs/common';
import { TransportRouteRepository } from './transportRoutes.repository';
import { TransportRoute } from './entities/transportRoute.entity';

@Injectable()
export class TransportRoutesService {
  constructor(
    private readonly transportRouteRepository: TransportRouteRepository,
  ) {}

  async getRoutes(): Promise<TransportRoute[]> {
    try {
      return await this.transportRouteRepository.findAll();

      // if (routes?.length === 0) {
      //   throw new NotFoundException('Transport routes not found!');
      // } else {
      //   return routes;
      // }
    } catch (error) {
      throw error;
    }
  }

  async getRoute(id: number): Promise<TransportRoute> {
    try {
      const route = await this.transportRouteRepository.findOneById(id);

      if (!route) {
        throw new NotFoundException(`Route with id: ${id} does not exist`);
      } else {
        return route;
      }
    } catch (error) {
      throw error;
    }
  }

  // async createRoute(route: CreateRouteDto): Promise<TransportRoute> {
  //   try {
  //     return await this.transportRouteRepository.store(route);
  //   } catch (error) {
  //     throw new UnprocessableEntityException(
  //       `Route resource: ${route.shortName} creation failed`,
  //     );
  //   }
  // }

  // async createRoutes(routes: CreateRouteDto[]): Promise<InsertResult> {
  //   try {
  //     const insertedRoutes = await this.transportRouteRepository.storeMany(routes);
  //     console.log(insertedRoutes);
  //     return insertedRoutes;
  //   } catch (error) {
  //     console.log(error)
  //     throw new UnprocessableEntityException(
  //       'Routes resources creation failed',
  //     );
  //   }
  // }

  // async replaceRoute(
  //   id: number,
  //   route: ReplaceRouteDto,
  // ): Promise<TransportRoute> {
  //   try {
  //     const updatedRoute = await this.transportRouteRepository.updateOneById(id, route);

  //     if (!updatedRoute) {
  //       throw new NotFoundException(`Route: ${id} does not exist`);
  //     } else {
  //       return updatedRoute;
  //     }
  //   } catch (error) {
  //     throw new ConflictException('Route update failed');
  //   }
  // }

  // async updateRoute(
  //   id: number,
  //   route: UpdateRouteDto,
  // ): Promise<TransportRoute> {
  //   try {
  //     const updatedRoute = await this.transportRouteRepository.updateOneById(id, route);

  //     if (!updatedRoute) {
  //       throw new NotFoundException(`Route: ${id} does not exist`);
  //     } else {
  //       return updatedRoute;
  //     }
  //   } catch (error) {
  //     throw new ConflictException('Route update failed');
  //   }
  // }

  // async deleteRoute(id: number): Promise<DeleteResult> {
  //   try {
  //     const deletedRoute = await this.transportRouteRepository.deleteOneById(id);
  //     console.log(deletedRoute);
  //     return deletedRoute;
  //   } catch (error) {
  //     throw new UnprocessableEntityException(
  //       'Routes resources creation failed',
  //     );
  //   }
  // }
}
