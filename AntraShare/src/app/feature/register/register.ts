export interface Register {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    validatePassword: (password: string)=>{
        valid: boolean,
        digit: boolean,
        uppercase: boolean,
        lowercase: boolean
    };
}
