import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransportRoute } from './entities/transportRoute.entity';

export class TransportRouteRepository extends Repository<TransportRoute> {
  constructor(
    @InjectRepository(TransportRoute)
    private transportRouteRepository: Repository<TransportRoute>,
  ) {
    super(
      transportRouteRepository.target,
      transportRouteRepository.manager,
      transportRouteRepository.queryRunner,
    );
  }

  // async getMaximumRouteIndex(): Promise<number> {
  //   const [route] = await this.find({
  //     order: {
  //       id: 'DESC',
  //     },
  //     take: 1,
  //     select: ['id'],
  //   });
  //   return route.id;
  // }

  async findAll(): Promise<TransportRoute[]> {
    return await this.find();
  }

  async findOneById(id: number): Promise<TransportRoute | undefined> {
    return await this.findOneBy({ id: id });
  }

  async findOneByShortName(
    shortName: string,
  ): Promise<TransportRoute | undefined> {
    return await this.findOneBy({ shortName: shortName });
  }

  // async store(createRouteDto: CreateRouteDto): Promise<TransportRoute> {
  //   const prevRouteIndex = await this.getMaximumRouteIndex();
  //   const createdRoute = this.create({
  //     ...createRouteDto,
  //     id: prevRouteIndex + 1,
  //   });
  //   return await this.save(createdRoute);
  // }

  // async storeMany(routes: CreateRouteDto[]): Promise<InsertResult> {
  //   const newRoutes = routes.map(async (route, index) => {
  //     const prevRouteIndex = await this.getMaximumRouteIndex();
  //     this.create({
  //       ...route,
  //       id: prevRouteIndex + (index + 1),
  //     });
  //   });
  //   return await this.createQueryBuilder().insert().into(TransportRoute).values(newRoutes).execute();
  // }

  // async updateOneById(id: number, updateRouteDto: UpdateRouteDto): Promise<TransportRoute | undefined> {
  //   const route = await this.findOneById(id);

  //   if (!route) {
  //     return undefined;
  //   } else {
  //     Object.assign(route, updateRouteDto);
  //     return await this.save(route);
  //   }
  // }

  // async updateOneByShortName(
  //   shortName: string,
  //   updateRouteDto: UpdateRouteDto,
  // ): Promise<TransportRoute | undefined> {
  //   const route = await this.findOneBy({ shortName: shortName });

  //   if (!route) {
  //     return undefined;
  //   } else {
  //     Object.assign(route, updateRouteDto);
  //     return await this.save(route);
  //   }
  // }

  // async deleteOneById(id: number): Promise<DeleteResult | undefined> {
  //   return await this.delete({ id: id });
  // }

  // async deleteOneByShortName(
  //   shortName: string,
  // ): Promise<DeleteResult | undefined> {
  //   return await this.delete({ shortName: shortName });
  // }
}
