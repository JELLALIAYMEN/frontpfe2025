import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';
  token = '';
  role = '';

  hide: boolean = true;
  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        this.token = response.token;


        this.role = response.role;
        this.message = response.message;
        localStorage.setItem('isLoggedIn', 'true'); // Store isLoggedIn as true
        localStorage.setItem('token', this.token); // Stockez le token pour une utilisation future
         // Stockez le token pour une utilisation future


        console.log('Login successful:', response);
        this.authService.handleLoginResponse(response);  // Appel à la méthode de redirection

      },
      (error) => {
        this.message = 'Login failed. Please check your credentials.';
        console.error('Login error:', error);
      }
    );
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;  // Bascule l'état de visibilité du mot de passe
  }
}
