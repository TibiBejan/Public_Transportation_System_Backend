import {
  Controller,
  Get,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { TransportStopsSequenceService } from './transportStopsSequence.service';
import { TransportStopSequence } from './entities/transportStopSequence.entity';

@Controller()
export class TransportStopsSequenceController {
  constructor(private readonly transportStopsSequenceService: TransportStopsSequenceService) { }

  @Get('stops-sequence/:id')
  public async getStops(@Param('id') id: string): Promise<TransportStopSequence[]> {
    try {
      return await this.transportStopsSequenceService.getStopsSequence(id);
    } catch (err) {
      throw new NotFoundException('Transport stops not found!');
    }
  }
}
