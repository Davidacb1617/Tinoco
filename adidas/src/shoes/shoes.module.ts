import { Module } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { ShoesController } from './shoes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ShoesController],
  providers: [ShoesService],
  imports: [PrismaModule]
})
export class ShoesModule {}
