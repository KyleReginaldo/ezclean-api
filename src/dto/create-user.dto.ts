import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  createdAt: string;
  @IsNotEmpty()
  status: number;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  firstname: string;
  @IsNotEmpty()
  lastname: string;
}
