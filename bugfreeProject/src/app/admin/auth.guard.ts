import { CanActivateFn } from '@angular/router';
import { AdminService } from './components/admin/admin.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const adminService = inject(AdminService);
  return adminService.isAuth();
};
