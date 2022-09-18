// import { Injectable } from '@nestjs/common';
// import { CreateOrderDto } from './dto/create-order.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { OrderEntity } from './entities/order.entity';

// @Injectable()
// export class OrdersService {
//   constructor(
//     @InjectRepository(OrderEntity)
//     private repository: Repository<OrderEntity>,
//   ) {}

//   create(dto: CreateOrderDto) {
//     return this.repository.create({
//       list: dto.list,
//       user: { id: dto.user },
//       total: dto.total,
//     });
//   }
// }
