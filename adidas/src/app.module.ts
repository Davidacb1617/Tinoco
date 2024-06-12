import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ShoesModule } from './shoes/shoes.module';

@Module({
  imports: [PrismaModule, ShoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
