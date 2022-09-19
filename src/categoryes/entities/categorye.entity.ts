import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('[pizza-res]-categoryes')
export class CategoryeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  list: string;
}
