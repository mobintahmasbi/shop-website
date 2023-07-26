import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {IsString, MinLength} from 'class-validator';
import { Product } from './product.entity';

@Entity()
export class ProductFeatures {
    
    @PrimaryGeneratedColumn()
    productFeatureId: number;

    @Column({
        nullable: false
    })
    @IsString()
    @MinLength(3)
    key: string;

    @Column({
        nullable: false
    })
    @IsString()
    @MinLength(1)
    value: string;

    @ManyToOne(() => Product, (product: Product) => product.features)
    product: Product;
}