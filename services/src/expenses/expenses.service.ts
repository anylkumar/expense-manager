import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './expense-entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
  ) {}

  async createExpense(query: any): Promise<string> {
    await this.expenseRepository.save(query);
    return "Your expense is saved successfully.";
  }

  async getAllExpenses(): Promise<Expense[]> {
    return await this.expenseRepository.find();
  }

  async getExpenseById(id: number): Promise<Expense> {
    const expense = await this.expenseRepository.findOne({
      where:{
        id: id
      }
    });
    if (!expense) {
      throw new NotFoundException('Expense not found');
    }
    return expense;
  }

  async updateExpenseById(id: number, updatedData: any): Promise<string> {
    await this.expenseRepository.update(id, updatedData);
    return "Expense updated successfully";
  }

  async deleteExpenseById(id: number): Promise<string> {
    const deleteResult = await this.expenseRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new NotFoundException('Expense not found');
    }
    return "Expense deleted successfully";
  }
}
