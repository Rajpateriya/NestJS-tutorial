import { IsString, IsEmail, IsOptional, IsInt, Min, MaxLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @Min(3)
  @MaxLength(50)
  @IsOptional() 
  name?: string;

  @IsEmail()
  @IsOptional() 
  email?: string;

  @IsString()
  @Min(6)
  @IsOptional() 
  password?: string;

  @IsInt()
  @IsOptional() 
  age?: number;
}
