import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const ParentGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router); // Inject the Router service
  const userProfile = localStorage.getItem("userProfile");
  const condition = userProfile == "Parent" || userProfile== "parent";


  if (condition) {
    // Check if user is an enseignant (adjust the xlogic as needed)
    return true;
  } else {
    // Show an alert in French if not authenticated as enseignant
    Swal.fire({
      title: "Authentification refusée pour le parent",
      text: "Vous devez vous connecter avec un compte parent.",
      icon: "warning"
    });

    // Navigate to login page
    router.navigate(['auth/login']); 
    return false;
  }
};

