import {
  Controller,
  Param,
  Get,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TransportAgencyService } from './transportAgency.service';
import { TransportAgency } from './entities/transportAgency.entity';

@Controller()
export class TransportAgencyController {
  constructor(
    private readonly transportAgencyService: TransportAgencyService,
  ) {}

  @Get('agencies')
  public async getAgencies(): Promise<TransportAgency[]> {
    try {
      return await this.transportAgencyService.getAgencies();
    } catch (err) {
      throw new NotFoundException('Transport agencies not found!');
    }
  }

  @Get('agencies/:id')
  public async getAgency(@Param('id') id: number): Promise<TransportAgency> {
    try {
      return await this.transportAgencyService.getAgency(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Transport agency with id ${id} not found!`,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }
}
