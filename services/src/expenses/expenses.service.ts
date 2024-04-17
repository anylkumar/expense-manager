import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpenseEntity } from './expense-entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(ExpenseEntity)
    private expenseRepository: Repository<ExpenseEntity>,
  ) {}

  async getExpense(expenseEntity: ExpenseEntity): Promise<ExpenseEntity[]> {
    console.log('expenseEntity', expenseEntity);
    return await this.expenseRepository.find();
  }
}
