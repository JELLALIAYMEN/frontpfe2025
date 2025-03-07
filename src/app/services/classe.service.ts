import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http: HttpClient,
    private router: Router) { }
    addClass(classe: any): Observable<any> {
      return this.http.post<any>(`${environment.BASE_URL}/classe/ajouter`,classe);
    }

    countClasses(): Observable<any> {
      return this.http.get<any>(`${environment.BASE_URL}/classe/count-classes`);
    }


  allClasses(): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}/classe/afficher`);
  }
}
