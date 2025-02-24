import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) {}

  // Ajouter une réclamation
  reclamer(email: string, matricule: string, sujet: string, date: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = { email, matricule, sujet, date };

    return this.http.post<any>(`${environment.BASE_URL}/rec/ajouter`, null, { params, headers });
  }

  // Afficher toutes les réclamations
  getAllReclamations(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.BASE_URL}/rec/afficher`);
  }

  // Afficher une réclamation par ID
  getReclamationById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}/rec/afficherbyid`, {
      params: new HttpParams().set('id', id.toString()),
    });
  }

  // Afficher les réclamations par email
  getReclamationsByEmail(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.BASE_URL}/rec/afficherbyemail`, {
      params: new HttpParams().set('email', email),
    });
  }
  repondreReclamation(id: number, email: string, reponse: string): Observable<any> {
    const url = `${environment.BASE_URL}/rec/${id}/repondre`;
    return this.http.post<any>(url, reponse, {
      params: { email },
    });
  }

  // Supprimer une réclamation
  deleteReclamation(id: number): Observable<string> {
    return this.http.delete<string>(`${environment.BASE_URL}/rec/supprimer`, {
      params: new HttpParams().set('id', id.toString()),
    });
  }


  // Récupérer les réclamations par destinataire
  getReclamationsByDestinataire(email: string): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/rec/afficherbydestinataire`, { params: { email } });
  }
}
