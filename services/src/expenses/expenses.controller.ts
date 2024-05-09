import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private service: ExpensesService) {}

  @Post()
  createExpense(@Body() body) {
    return this.service.createExpense(body)
  }

  @Get()
  getAllExpense() {
    return this.service.getAllExpenses()
  }

  @Get(':id')
  getExpenseById(@Param() params) {
    return this.getExpenseById(params.id)
  }

  @Put(':id')
  updateExpenseById(@Param('id') id: number, @Body() updatedData: any): Promise<string> {
    return this.service.updateExpenseById(id, updatedData);
  }

  @Delete(':id')
  deleteExpenseById(@Param() params) {
    return this.service.deleteExpenseById(params.id)
  }
  

}
