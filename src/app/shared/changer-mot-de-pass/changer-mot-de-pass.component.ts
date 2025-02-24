import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-changer-mot-de-pass',
  templateUrl: './changer-mot-de-pass.component.html',
  styleUrls: ['./changer-mot-de-pass.component.scss']
})
export class ChangerMotDePassComponent implements OnInit{
  id: any;
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  passwordField: boolean = false;

  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    const email = localStorage.getItem('email');
    if (email) {
      this.userService.userbyemail(email).subscribe({
        next: (user) => {
          this.id = user.id;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération de l\'utilisateur :', err);
        }
      });
    }
  }

  // Toggle visibility of password
  togglePasswordVisibility() {
    this.passwordField = !this.passwordField;
  }

  // Password validation
  validatePasswords(): boolean {
    return this.newPassword === this.confirmPassword && this.newPassword.length >= 6;
  }

  changePassword(): void {
    if (!this.validatePasswords()) {
      this.errorMessage = "Les mots de passe ne correspondent pas ou sont trop courts.";
      return;
    }

    this.authService.changePassword(this.id, this.newPassword).subscribe({
      next: (response) => {
        this.successMessage = "Mot de passe modifié avec succès!";
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = "Erreur lors du changement de mot de passe.";
        this.successMessage = '';
      }
    });
  }
}
