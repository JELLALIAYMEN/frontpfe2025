import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const AdminGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router); // Inject the Router service
  const userProfile = localStorage.getItem("userProfile");
  const condition = userProfile == "admin" || userProfile== "Admin";

  if (condition) {
    // Check if user is an admin (adjust the logic as needed)
    return true;
  } else {
    // Show an alert if not authenticated as admin
    Swal.fire({
          title: "Authentification refusée pour l'admin",
          text: "Vous devez vous connecter avec un compte amdin.",
          icon: "warning"
        });
    

    // Navigate to login page
    router.navigate(['auth/login']); 
    return false;
  }
};
