import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des départements
  getDepartements(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/departement/all`) ;
  }

}
