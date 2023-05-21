export type UserInfo = {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
}

export type Comment = {
    id: number;
    content: string;
    poster: UserInfo;
}