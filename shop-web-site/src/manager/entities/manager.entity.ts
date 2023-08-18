import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { IsString, MinLength, Min, IsNumber } from 'class-validator';

enum roleOfManagers {
    OWNER,
    ADMIN,
    WRITER
}

@Entity()
export class Manager {

    @PrimaryGeneratedColumn()
    managerId: number;

    @Column()
    @IsString()
    @MinLength(8)
    userName: string;
    
    @Column()
    @IsString()
    @MinLength(3)
    Name: string;

    @Column()
    @IsString()
    @MinLength(3)
    FamilyName: string;

    @Column()
    @IsNumber()
    @Min(18)
    Age: number;

    @Column()
    @IsString()
    @MinLength(8)
    password: string;

    @Column()
    @IsString()
    @MinLength(8)
    email: string;

    @Column({
        type: 'enum',
        enum: roleOfManagers,
        default: roleOfManagers.ADMIN
    })
    role: roleOfManagers;

}
