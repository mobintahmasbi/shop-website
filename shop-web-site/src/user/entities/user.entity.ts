import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {IsString, MinLength, MaxLength} from 'class-validator'
import { Order } from 'src/order/entities/order.entity';
import { Comment } from 'src/comment/entities/comment.entity';

@Entity()
export class User{
    
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({
        unique: true,
    })
    @IsString()
    userName: string;

    @Column()
    @IsString()
    @MinLength(8)
    password: string;

    @Column({
        unique: true,
    })
    @IsString()
    email: string;

    @Column({
        unique: true
    })
    @IsString()
    @MinLength(11)
    @MaxLength(11)
    phoneNumber: string;

    @Column({
        default: null
    })
    @IsString()
    address: string;

    @Column({
        default: 'DEACTIVE'
    })
    status: string;

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];
}