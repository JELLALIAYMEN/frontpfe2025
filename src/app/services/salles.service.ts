import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SallesService {

  constructor(private http: HttpClient) { }



  modifSalle(id: number, nom: string): Observable<any> {
    return this.http.put(`${environment.BASE_URL}/salle/modif?id=${id}&nom=${nom}`, {});
  }
  ajoutSalle(salle: any, salleType: any): Observable<any> {
    return this.http.post(
      `${environment.BASE_URL}/salle/ajouter?salleType=${salleType}`, // Correct query parameter format
      salle
    );
  }
  getSalles(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/salle/affichage`);
  }
}
