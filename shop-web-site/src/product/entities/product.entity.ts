import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {IsString, IsNumber, MinLength, MaxLength, Min, Max} from 'class-validator';

@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    productId: number;

    @Column()
    @IsString()
    @MinLength(2)
    productName: string;

    @Column()
    @IsNumber()
    @Min(0)
    count: number;

    @Column()
    @IsNumber()
    @Min(0)
    price: number;

    @Column()
    @IsNumber()
    @Min(0)
    @Max(100)
    discountPercent: number;

    @Column()
    @IsNumber()
    @Min(0)
    totalPrice: number;

    @Column()
    @IsString()
    @MaxLength(200)
    description: string;

    @Column()
    @IsNumber()
    @Min(1)
    @Max(5)
    score: number;
}