export class PasswordStatus {
  valid = false;
  length = false;
  digit = false;
  uppercase = false;
  lowercase = false;
}

export interface UserInfo {
    username: string;
    email?: string;
    password: string;
    confirmPassword?: string;
    validatePassword?(password: string): PasswordStatus;
}