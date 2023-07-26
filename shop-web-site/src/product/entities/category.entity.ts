import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {IsString, MinLength} from 'class-validator';

@Entity()
export class Category{
    
    @PrimaryGeneratedColumn()
    categoryId: number;

    @Column()
    @IsString()
    @MinLength(3)
    categoryName: string;

    @Column()
    parentId: number;
}