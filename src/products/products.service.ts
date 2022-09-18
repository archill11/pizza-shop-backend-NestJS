import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private repository: Repository<ProductEntity>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const find = await this.repository.findOneBy({ id: parseInt(`${id}`, 10) });

    if (!find) {
      throw new NotFoundException('продукт не найден');
    }

    return find;
  }
}
