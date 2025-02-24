import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const EnseignantGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router); // Inject the Router service
  const userProfile = localStorage.getItem("userProfile");
  const condition = userProfile == "teacher" || userProfile== "Teacher";

  if (condition) {
    console.log(condition,"************")
    // Check if user is an enseignant (adjust the logic as needed)
    return true;
  } else {
    // Show an alert in French if not authenticated as enseignant
    Swal.fire({
      title: "Authentification refusée pour l'enseignant",
      text: "Vous devez vous connecter avec un compte enseignant.",
      icon: "warning"
    });

    // Navigate to login page
    router.navigate(['auth/login']); 
    return false;
  }
};
