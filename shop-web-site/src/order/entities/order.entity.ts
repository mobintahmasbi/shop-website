import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { IsNumber, Min } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

enum statusOfOrder {
  COMPLETED,
  ACTIVE,
  DISABLED,
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  orderId: number;

  @Column()
  @IsNumber()
  @Min(0)
  totalPrice: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({
    type: 'enum',
    enum: statusOfOrder,
    default: statusOfOrder.ACTIVE,
  })
  status: statusOfOrder;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
