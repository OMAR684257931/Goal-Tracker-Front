import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const guestGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.getToken()) {
    router.navigate(['/dashboard']); // ✅ redirect if logged in
    return false;
  }

  return true; // allow if not authenticated
};

