import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import {IsString, IsNumber, MinLength, MaxLength, Min, Max} from 'class-validator';
import { ProductFeatures } from './productFeature.entity';
import { Category } from './category.entity';

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

    @OneToMany(() => ProductFeatures, (feature) => feature.product)
    features: ProductFeatures;

    @OneToOne(() => Category)
    @JoinColumn()
    category: Category;
}