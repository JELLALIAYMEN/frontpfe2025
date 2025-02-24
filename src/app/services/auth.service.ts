import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  matricule:any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private router: Router,) { }

    addEleve(user: any, nomclasse: string, matricule: string): Observable<any> {
      const url = `${environment.BASE_URL}/users/addEleve/${nomclasse}/${matricule}`;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(url, user, { headers });
    }
    addUser(user: any): Observable<any> {
      const url = `${environment.BASE_URL}/users/addUser`;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(url, user, { headers });
    }
    login(email: string, password: string): Observable<LoginResponse> {
      const url = `${environment.BASE_URL}/auth/login2`;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body: LoginRequest = { email, password };
      return this.http.post<LoginResponse>(url, body, { headers });
    }
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
      case 'Teacher':
        this.router.navigate(['/enseignant/home-enseignant']);
        break;
      case 'Parent':
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
