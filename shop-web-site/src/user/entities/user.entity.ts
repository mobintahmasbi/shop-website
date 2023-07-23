import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {IsString, MinLength, MaxLength} from 'class-validator'

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

}