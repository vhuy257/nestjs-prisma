import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  image: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  price: number;
}
