/** unix timestamp */
export type Time = number;

export class PasswordStatus {
  valid = false;
  length = false;
  digit = false;
  uppercase = false;
  lowercase = false;
}

export type Genders = 'Male' | 'Female' | 'Other'

export interface UserInfo {
    username: string;
    name?: string;
    email?: string;
    gender?: Genders;
    birthday?: Date;
    password?: string;
    confirmPassword?: string,
    avatar?: string | null;
    validatePassword?(password: string): PasswordStatus;
}

export type Story = {
    id: number;
    post_time: Time;
    content: string;
    poster: UserInfo;
}

export type Comment = {
    id: number;
    story_id: number;
    post_time: Time;
    content: string;
    poster: UserInfo;
}
