import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatieresService {

  constructor( private http: HttpClient) { }
    addMatiere(m: any): Observable<any> {
      return this.http.post<any>(`${environment.BASE_URL}/matiere/ajout`,m);
    }
    allMatieres(): Observable<any> {
      return this.http.get<any>(`${environment.BASE_URL}/matiere/afficher`);
    }
}
