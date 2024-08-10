import { CanActivateFn, Router } from '@angular/router';
import { UserServiceService } from '../modules/user/services/user-service.service';
import { inject } from '@angular/core';

export const activateGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserServiceService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }
  else
  {
    router.navigateByUrl('user');
    return false;
  }
};
