import { ApiProperty } from '@nestjs/swagger';
import { Items } from '@prisma/client';

export class ItemEntity implements Items {
  constructor(partial: Partial<ItemEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  price: number;
}
