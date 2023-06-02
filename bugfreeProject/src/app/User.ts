

export interface User {
    _id: string;
    name?: string; // not required;
    userName: string;
    userEmail: string;
    password: string;
    userRole: string;
    age?: number; // not required;
    gender?: string; // not required;
    phone?: number; // not required;
}