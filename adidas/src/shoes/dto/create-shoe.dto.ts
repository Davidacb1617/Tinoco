import { ApiProperty } from '@nestjs/swagger';
export class CreateShoeDto {
  @ApiProperty()
  model: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  price: number;
}
