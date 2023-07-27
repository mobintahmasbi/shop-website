import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  OneToMany
} from 'typeorm';
import { IsNumber, Min } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { OrderLine } from './orderLine.entity';

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

  @OneToMany(() => OrderLine, (orderLine) => orderLine.order)
  orderLines: OrderLine[];
}
