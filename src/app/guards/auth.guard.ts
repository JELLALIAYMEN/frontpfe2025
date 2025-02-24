import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = async (route, state) => { 
  const router = inject(Router);

  // Retrieve isLoggedIn status from localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return true;
  } else {
    Swal.fire({
      title: "Authentification requise",
      text: "Veuillez vous connecter",
      icon: "warning"
    });
    router.navigate(['auth/login']);
    return false;
  }
};
