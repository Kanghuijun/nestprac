import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  restaurant_name: string;

  @Column({ length: 50 })
  address: string;

  @Column({ length: 20 })
  phone_number: string;

  @Column({ length: 50 })
  business_hours: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  delivery_fee: number;

  @Column({ nullable: true })
  image_url: string;
}
