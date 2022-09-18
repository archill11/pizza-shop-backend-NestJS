import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryesService } from './categoryes.service';
import { CreateCategoryeDto } from './dto/create-categorye.dto';

@Controller('categoryes')
export class CategoryesController {
  constructor(private readonly categoryesService: CategoryesService) {}

  @Get()
  findAll() {
    return this.categoryesService.findAll();
  }

  @Post()
  create(@Body() dto: CreateCategoryeDto) {
    return this.categoryesService.create(dto);
  }
}
