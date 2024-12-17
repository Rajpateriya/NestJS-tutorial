import { IsString, IsEmail, IsOptional, IsInt, Min, MaxLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @Min(3)
  @MaxLength(50)
  @IsOptional() // Make name optional during update
  name?: string;

  @IsEmail()
  @IsOptional() // Make email optional during update
  email?: string;

  @IsString()
  @Min(6)
  @IsOptional() // Make password optional during update
  password?: string;

  @IsInt()
  @IsOptional() // Make age optional during update
  age?: number;
}
