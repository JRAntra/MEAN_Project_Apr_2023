/** unix timestamp */
export type Time = number;
export type ISOTime = string;

export class PasswordStatus {
  valid = false;
  length = false;
  digit = false;
  uppercase = false;
  lowercase = false;
}

export type Genders = 'Male' | 'Female' | 'Other';

export type UserProfile = {
    bearerToken?: string,
    name?: string,
    userName?: string,
    userEmail?: string,
    password?: string,
    userRole?: string,
    age?: number,
    gender?: string,
    phone?: number,
}

export type Comment = {
  publisherName: string;
  publishedTime: ISOTime;
  content: {
    image: string;
    video: string;
    text: string;
  };
};

export type Story = {
  publisherName: string;
  publishedTime: ISOTime;
  content: {
    image: string;
    video: string;
    text: string;
  };
  comment: Comment[];
};
