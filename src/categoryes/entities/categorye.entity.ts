import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categoryes')
export class CategoryeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  list: string;
}
