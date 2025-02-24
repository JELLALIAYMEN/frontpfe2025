import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendrierExService {

  private calendriersSubject = new BehaviorSubject<any[]>([]);
  calendriers$ = this.calendriersSubject.asObservable();

  constructor(private http: HttpClient) {}
  ccreerCalendrier(
    calendrier: any, 
    email: string, 
    salles: string, 
    matiere: string, 
    classe: string,
    typecalendrier: string,
    t: string
  )
    : Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('salles', salles)
      .set('matiere', matiere)
      .set('classe', classe)
      .set('typecalendrier', typecalendrier)
      .set('t', t);

    return this.http.post(`${environment.BASE_URL}/calendrier/creer`, calendrier, { params,  responseType: 'text'   }).pipe(
      tap(() => {
        this.getAllCalendriers();
      })
    );
  }
  getAllCalendriers(): void {
    this.http.get<any[]>(`${environment.BASE_URL}/calendrier/afficher`).subscribe({
      next: (data) => this.calendriersSubject.next(data),
      error: (error) => console.error('Erreur lors du chargement des calendriers', error),
    });
  }
  envoyeremail(
    email: string, 
    classe: string, 
    trimestre: string, 
    typecalendrier: string,
  )
    : Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('classe', classe)
      .set('trimestre', trimestre)
      .set('typecalendrier', typecalendrier)
    return this.http.post(`${environment.BASE_URL}/calendrier/envoyeremail`, null, { params,  responseType: 'text'   })
  }
}
