import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export abstract class PaginationFilterRequest {
  @ApiProperty({
    type: 'number',
    required: true,
    default: 10,
    minimum: 1,
  })
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
  })
  size: number;

  @ApiProperty({
    type: 'number',
    required: true,
    default: 1,
    minimum: 1,
  })
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
  })
  page: number;
}
