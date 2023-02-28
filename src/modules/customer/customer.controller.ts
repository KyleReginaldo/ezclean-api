import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from 'src/model/customer.model';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get(':id')
  async getCustomer(@Param('id') id: string): Promise<Customer> {
    return this.customerService.getCustomer(id);
  }
  @Post('create')
  @UsePipes(new ValidationPipe())
  async createCustomer(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.customerService.createCustomer(createUserDto);
  }
}
