import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeworkServiceService {
  constructor(private http: HttpClient) { }

  affecterTravailAfaire(emailparent: string, travail: any): Observable<any> {
    const url = `${environment.BASE_URL}/parent/affecterTravail/${emailparent}`;
    return this.http.post<any>(url, travail); // Le travail à faire peut être un objet avec des détails
  }
  afficherHomework(emailParent: string): Observable<any> {
    const url = `${environment.BASE_URL}/parent/afficherTravail/${emailParent}`;
    return this.http.get<any>(url); // Retourner la liste des devoirs pour le parent
  }

}