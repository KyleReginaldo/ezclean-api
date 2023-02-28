import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { Customer } from 'src/model/customer.model';
import { Supabase } from 'src/supabase/supabase';

@Injectable()
export class CustomerService {
  constructor(private readonly supabase: Supabase) {}
  async getCustomer(id: string): Promise<Customer> {
    const { data, error } = await this.supabase
      .getClient()
      .from('customer')
      .select()
      .eq('id', id)
      .single();
    if (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
    console.log(data);
    return data as Customer;
  }
  async createCustomer(createUserDto: CreateUserDto): Promise<void> {
    const { error } = await this.supabase
      .getClient()
      .from('customer')
      .insert(createUserDto);
    if (error) throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
  }
}
