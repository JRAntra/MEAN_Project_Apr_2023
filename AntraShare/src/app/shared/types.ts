type ISOTime = string;
type Genders = string;

export interface UserProfile {
  _id: string;
  name?: string;
  userName: string;
  userEmail: string;
  userRole?: string;
  age?: number;
  gender?: Genders;
  phone?: number;
}

export interface UserProfileWithPassword extends UserProfile {
  password: string;
}

export interface UserProfileWithToken extends UserProfile {
  bearerToken: string;
}

export type Content = {
  _id?: string;
  image?: string;
  video?: string;
  text?: string;
};

export type Comment = {
  _id?: string;
  publisherName?: string;
  publishedTime?: ISOTime;
  content?: Content;
};

export type Story = {
  _id?: string;
  publisherName?: string;
  publishedTime?: ISOTime;
  content?: Content;
  comment?: Comment[];
};
