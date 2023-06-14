import { PartialType } from '@nestjs/mapped-types';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  userEmail: string;

  @IsNotEmpty()
  @Matches(/^(?=[0-9a-f]{64})$/) // 256-bit hex string
  passwordHashed: string;

  @IsOptional()
  gender: string;

  @IsOptional()
  @IsPhoneNumber()
  phone: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
