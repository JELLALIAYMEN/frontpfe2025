import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface Utilisateur {
  nom: string;
  prenom: string;
  login: string;
  email: string;
  password: string;
  profil: string;
  libelle: string;
  //constructor() {
  // Initialisez les propriétés si nécessaire
//}
}
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }
  getUserById(id: number): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/users/getbyid/${id}`);
  }
  userbyemail(email: string): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/users/getbyemail?email=${email}`);
  }

  getElevesByClass(classe: string): Observable<any[]> {
    const params = new HttpParams().set('nomclasse', classe); // Utilisation de 'nomclasse' pour correspondre à ce qui est attendu côté backend
    return this.http.get<any[]>(`${environment.BASE_URL}/users/eleveByClass`, { params });
  }


  deleteUser(idUtilisateur: any): Observable<any> {
    return this.http.delete(`${environment.BASE_URL}/users/delete/${idUtilisateur}`);
  }
  updateUser(utilisateur: any, id: number) {
    console.log("Données utilisateur envoyées:", utilisateur);  // Affiche les données envoyées
    return this.http.put(`${environment.BASE_URL}/users/update/${id}`, utilisateur);
  }


  countEleve(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/users/count-eleves`);
  }
  countEnseignant(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/users/count-enseignants`);
  }


  getUsers(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/users/ all`, { responseType: 'text' })// Parse the JSON string into a JavaScript object

  }

  addUser(user: Utilisateur): Observable<any> {
    const url = `${environment.BASE_URL}/users/addUser`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, user, { headers, responseType: 'text' });
  }

}

