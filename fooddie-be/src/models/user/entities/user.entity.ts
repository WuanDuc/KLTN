/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Address } from 'src/models/address/entities/address.entity';
@Entity('User')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  Name: string;

  @Column() 
  PhoneNumber: string;
  
  @Column() 
  Email: string;
  
  @Column() 
  AvatarURL: string;
  
  @Column({ nullable: false, type: 'date' }) // specify type for float values
  BirthDate: Date;
  
  @Column({ nullable: false, type: 'date' }) // specify type for float values
  CreateDate: Date;
  
  // @Column()
  // AddressID: string;

  @OneToOne(() => Address, (address) => address.id, { eager: true })
  Address: Address;
}
