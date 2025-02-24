import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const EleveGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router); // Inject the Router service
  const userProfile = localStorage.getItem("userProfile");
  const condition = userProfile == "eleve" || userProfile== "Eleve";

  if (condition) {
    // Check if user is an eleve (adjust the logic as needed)
    return true;
  } else {
    // Show an alert in French if not authenticated as eleve
    Swal.fire({
      title: "Authentification refusée pour l'éléve",
      text: "Vous devez vous connecter avec un compte élève.",
      icon: "warning"
    });

    // Navigate to login page
    router.navigate(['auth/login']); 
    return false;
  }
};
