import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatieresService {

 // private apiUrl = 'http://localhost:8099/matiere/afficher';

  constructor(private http: HttpClient) { }
  /*
  allMatieres(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl, { headers });
  }*/
  allMatieres(): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}/matiere/afficher`);
  }
  addMatiere(m: any): Observable<any> {
    return this.http.post<any>(`${environment.BASE_URL}/matiere/ajout`,m);
  }

}
/*
  allMatieres(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl, { headers });*/



















