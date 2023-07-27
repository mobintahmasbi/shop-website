import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToOne,
    JoinColumn
  } from 'typeorm';
  import { IsNumber, Min } from 'class-validator';
import { Order } from './order.entity';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class OrderLine{

    @PrimaryGeneratedColumn()
    orderLineId: number;

    @ManyToOne(() => Order, (order) => order.orderLines)
    order: Order;

    @Column()
    @IsNumber()
    @Min(1)
    count: number;

    @Column()
    @IsNumber()
    @Min(0)
    price: number;

    @OneToOne(() => Product)
    @JoinColumn()
    product: Product;
}