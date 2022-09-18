import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryesService } from './categoryes.service';
import { CategoryesController } from './categoryes.controller';
import { CategoryeEntity } from './entities/categorye.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryeEntity])],
  controllers: [CategoryesController],
  providers: [CategoryesService],
})
export class CategoryesModule {}
