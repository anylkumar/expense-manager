import { Controller, Get, Param } from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private service: ExpensesService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getExpense(params.id);
  }
}
