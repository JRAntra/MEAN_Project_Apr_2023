/** unix timestamp */
export type Time = number;

export type UserInfo = {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
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