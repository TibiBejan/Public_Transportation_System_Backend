import { PartialType } from '@nestjs/mapped-types';
import { CreateRouteDto } from './createRouteDto';

export class ReplaceRouteDto extends CreateRouteDto {}
export class UpdateRouteDto extends PartialType(CreateRouteDto) {}
