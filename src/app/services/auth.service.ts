import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {catchError, Observable, throwError} from 'rxjs';
import { environment } from 'src/environments/environment';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {

  token: string;
  type: string;
  message: string;
  role: string;
  email: string;
}
export interface Utilisateur {
  nom: string;
  prenom: string;
  login: string;
  email: string;
  password: string;
  profil: string;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<LoginResponse> {
    console.log('Attempting login with:', email, password);
    const url = `${environment.BASE_URL}/auth/login2`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body: LoginRequest = { email, password };

    return this.http.post<LoginResponse>(url, body, { headers }).pipe(
      catchError(error => {
        console.error('Login error:', error);
        return throwError(error);
      })
    );
  }
  addUser(user: Utilisateur, nomclasse: string): Observable<any> {
    const url = `${environment.BASE_URL}/addEleve/${nomclasse}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, user, { headers }).pipe(
      catchError(error => {
        console.error('Error adding user:', error);
        return throwError(error);
      })
    );
  }


/*
 addUser(user: Utilisateur): Observable<any> {
    const url = `${environment.BASE_URL}/users/addUser`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(url, user, {headers});
  }
*/


  handleLoginResponse(response: any): void {
    const token = response.token;
    const profil = response.profil;
    const email = response.email;

    // Sauvegarder le token dans localStorage (ou dans un autre endroit sécurisé)
    localStorage.setItem('token', token);
    localStorage.setItem('userProfile', profil);
    localStorage.setItem('email', email);

    // Logique de redirection en fonction du profil
    switch (profil) {
      case 'eleve':
        this.router.navigate(['/eleve/home-eleve']);
        break;
      case 'admin':
      case 'Admin':
        this.router.navigate(['/dashboard/home']);
        break;
      case 'enseignant':
        this.router.navigate(['/enseignant/home-enseignant']);
        break;
      case 'parent':
        this.router.navigate(['/parent/home-parent']);
        break;
      default:
        this.router.navigate(['/']);  // Par défaut, on redirige vers la page d'accueil
        break;
    }
  }
  changePassword(id: number, password: string): Observable<any> {
    // L'URL de votre API Spring Boot
    const url = `${environment.BASE_URL}/users/changemp?id=${id}&password=${password}`;

    // Envoi de la requête POST avec les données nécessaires (id et password)
    return this.http.post(url, null);  // Utilisation de 'null' car les données sont envoyées en tant que paramètres de requête
  }

}
