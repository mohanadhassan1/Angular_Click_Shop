import { CanActivateFn, Router } from '@angular/router';
import { UserAuthenticationService } from '../services/user-authentication.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {
  const userAuth = inject(UserAuthenticationService);
  const router = inject(Router);

  if (userAuth.isUserLogged) {
    return true;
  }
  else {
    alert("You need to Login")
    router.navigate(['/authLogin'])
    return false;
  }
};
