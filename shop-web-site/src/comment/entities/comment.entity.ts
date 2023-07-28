import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {IsString, MinLength} from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Product } from 'src/product/entities/product.entity';

enum statusOfComment {
    POSTED,
    WAITING_FOR_REVIEW,
    DISCARDABLE
}

@Entity()
export class Comment{

    @PrimaryGeneratedColumn()
    commentId: number;

    @Column()
    @IsString()
    @MinLength(3)
    title: string;

    @Column()
    @IsString()
    @MinLength(12)
    description: string;

    @Column({
        type: 'enum',
        enum: statusOfComment,
        default: statusOfComment.WAITING_FOR_REVIEW
    })
    status: statusOfComment;

    @ManyToOne(() => User, (user) => user.comments)
    user: User;

    @ManyToOne(() => Product, (product) => product.comments)
    product: Product;
}