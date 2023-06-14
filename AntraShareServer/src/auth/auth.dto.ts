import { IsNotEmpty, Matches } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  userEmail: string;

  @IsNotEmpty()
  @Matches(/^(?:[0-9a-f]{64})$/) // 256-bit hex string
  passwordHashed: string;
}
