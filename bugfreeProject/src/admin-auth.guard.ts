import { CanActivateFn } from '@angular/router';
import { User } from './app/User';

export const adminAuthGuard: CanActivateFn = (route, state) => {
    let userInfo: string | null = window.localStorage.getItem('userInfo');
    let info: User = JSON.parse(userInfo === null ? '' : userInfo);
    console.log(info);
    return info.userRole === 'admin';
};
