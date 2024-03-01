import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  create(createItemDto: CreateItemDto) {
    return this.prisma.items.create({ data: createItemDto });
  }

  findAll() {
    return this.prisma.items.findMany();
  }

  findOne(id: number) {
    return this.prisma.items.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.prisma.user.update({ where: { id }, data: updateItemDto });
  }

  remove(id: number) {
    return this.prisma.items.delete({ where: { id } });
  }
}
