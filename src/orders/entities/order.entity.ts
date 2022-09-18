// import { UserEntity } from 'src/user/entities/user.entity';
// import {
//   Entity,
//   ManyToOne,
//   JoinColumn,
//   Column,
//   PrimaryGeneratedColumn,
//   CreateDateColumn,
//   UpdateDateColumn,
// } from 'typeorm';

// @Entity('orders')
// export class OrderEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   list: [
//     {
//       count: number;
//       type: string;
//       title: string;
//       size: number;
//       price: number;
//       imageUrl: string;
//     },
//   ];

//   @Column()
//   total: string;

//   @ManyToOne(() => UserEntity)
//   @JoinColumn({ name: 'userId' })
//   user: UserEntity;

//   @CreateDateColumn({ type: 'timestamp' })
//   createdAt: Date;

//   @UpdateDateColumn({ type: 'timestamp' })
//   updatedAt: Date;
// }
