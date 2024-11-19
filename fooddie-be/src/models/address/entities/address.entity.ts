/* eslint-disable prettier/prettier */
import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, JoinTable} from 'typeorm';   
import { User } from '../../user/entities/user.entity';
@Entity('Address')
export class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    Street: string;
  
    @Column({ nullable: true })
    City: string;
  
    @Column({ nullable: true })
    State: string;
  
    @Column({ nullable: true })
    ZipCode: string;

    @OneToOne(() => User, (user) => user.Address, { cascade : true })
    @JoinColumn()
    user: User;
    
    
}