import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryeEntity } from './entities/categorye.entity';
import { Repository } from 'typeorm';
import { CreateCategoryeDto } from './dto/create-categorye.dto';

@Injectable()
export class CategoryesService {
  constructor(
    @InjectRepository(CategoryeEntity)
    private repository: Repository<CategoryeEntity>,
  ) {}

  async findAll() {
    const data = await this.repository.find();
    const categoryes = data[0].list.split(',');
    return [...categoryes];
  }

  create(dto: CreateCategoryeDto) {
    return this.repository.save(dto);
  }
}
