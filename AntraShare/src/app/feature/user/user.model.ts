export class PasswordStatus {
    valid: boolean = false;
    length: boolean = false;
    digit: boolean = false;
    uppercase: boolean = false;
    lowercase: boolean = false;
}

export interface UserInfo {
    username: string;
    email?: string;
    password: string;
    confirmPassword?: string;
    validatePassword?(password: string): PasswordStatus;
}