import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SallesService {

  constructor(private http: HttpClient) { }
   ajoutSalle(salle: any, nomdep: string): Observable<any> {
    return this.http.post(`${environment.BASE_URL}/salle/ajout?nomdep=${nomdep}`, salle);
  }

  afficherSalles(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.BASE_URL}/salle/affichage`);
  }

  modifSalle(id: number, nom: string): Observable<any> {
    return this.http.put(`${environment.BASE_URL}/salle/modif?id=${id}&nom=${nom}`, {});
  }
}
