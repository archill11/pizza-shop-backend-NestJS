import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  category: number;

  @Column()
  rating: number;

  @Column()
  imageUrl: string;

  // @Column('number', { array: true })
  // types: number[];

  // @Column({ default: [] })
  // sizes: number[];

  // @Column({ default: [] })
  // price: number[];
}
