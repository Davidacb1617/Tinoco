import { Injectable } from '@nestjs/common';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShoesService {
  constructor(private prisma: PrismaService){}

  create(createShoeDto: CreateShoeDto) {
    return this.prisma.adidas.create({ data: createShoeDto});
  }

  findAll() {
    return this.prisma.adidas.findMany({
      where:{id: {}}
    })
  }

  findOne(id: number) {
    return this.prisma.adidas.findUnique({where: {id} });
    ;
  }

  update(id: number, UpdateShoeDto: UpdateShoeDto) {
    return this.prisma.adidas.update ({
      where: {id},
      data: UpdateShoeDto,
    });
  }

  remove(id: number) {
    return this.prisma.adidas.delete({ where: {id} });
  }
}
