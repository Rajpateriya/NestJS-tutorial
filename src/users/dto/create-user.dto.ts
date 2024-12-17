import { IsString, IsEmail, IsOptional, IsInt, Min, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Min(3)
  @MaxLength(50)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Min(6)
  password: string;

  @IsOptional()  // Age is optional
  @IsInt()
  @IsOptional()
  age?: number;
}
