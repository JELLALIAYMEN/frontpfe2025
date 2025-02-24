import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmploiDuTempsService {
  constructor(private http: HttpClient) { }

  private emploisSubject = new BehaviorSubject<any[]>([]);
  emplois$ = this.emploisSubject.asObservable();

  creerEmploi(
    Emploidetemps: any, 
    email: string, 
    salle: string, 
    matiere: string, 
    classe: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('salle', salle)
      .set('matiere', matiere)
      .set('classe', classe);

    return this.http.post(`${environment.BASE_URL}/emploi/creeremploi`, Emploidetemps, { params, responseType: 'text' }).pipe(
      tap(() => {
        this.allEmploi();
      })
    );;
  }

  envoyerEmail(emailDestinataire: string, classe: string): Observable<any> {
    const params = new HttpParams()
      .set('emailDestinataire', emailDestinataire)
      .set('classe', classe);

    return this.http.post(`${environment.BASE_URL}/emploi/envoiemail`, null, { params }).pipe(
      tap(() => {
        this.allEmploi();
      })
    );
  }

  allEmploi(): void {
    this.http.get<any[]>(`${environment.BASE_URL}/emploi/allemploi`).subscribe({
      next: (data) => this.emploisSubject.next(data),
      error: (error) => console.error('Erreur lors du chargement des emplois', error),
    });
  }
}
