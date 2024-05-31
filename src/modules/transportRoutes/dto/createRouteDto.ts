import { IsNotEmpty, IsInt, MaxLength, Min } from 'class-validator';

export class CreateRouteDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  agencyId: number;

  @IsNotEmpty()
  @MaxLength(255, {
    message:
      'ShortName field content is too long, maximum value allowed: 255 characters',
  })
  shortName: string;

  @IsNotEmpty()
  @MaxLength(255, {
    message:
      'LongName field content is too long, maximum value allowed: 255 characters',
  })
  longName: string;

  color: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  type: number;

  @IsNotEmpty()
  @MaxLength(255, {
    message:
      'LongName field content is too long, maximum value allowed: 255 characters',
  })
  description: string;
}
