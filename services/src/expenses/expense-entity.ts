import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  category: string;

  @Column('date')
  date: Date;

  @Column()
  amount: number;

  @Column({ length: 255 })
  description: string;
}
