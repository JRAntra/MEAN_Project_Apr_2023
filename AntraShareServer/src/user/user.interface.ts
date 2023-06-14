export interface User {
  name: string;
  userName: string;
  userEmail: string;
  userRole: 'user' | 'admin';
  age: number;
  gender: string;
  phone: number;
}
