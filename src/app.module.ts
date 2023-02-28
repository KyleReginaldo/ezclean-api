import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { SupabaseModule } from './supabase/supabase.module';
import { CustomerModule } from './modules/customer/customer.module';

@Module({
  imports: [
    SupabaseModule,
    ConfigModule.forRoot(),
    PassportModule,
    CustomerModule,
  ],
})
export class AppModule {}
