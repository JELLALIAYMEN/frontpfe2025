import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteEtMoyenneService {

  constructor(private http: HttpClient) {}

  calculerMoyenneParMatiereEtEleve(
    eleveId: number,
    trimestre: string,
    matiereId: number
  ): Observable<number> {
    const params = new HttpParams()
      .set('eleveId', eleveId)
      .set('trimestre', trimestre)
      .set('matiereId', matiereId);

    return this.http.get<number>(`${environment.BASE_URL}/moyenne/matiere`, { params });
  }

  getNotes(eleveId: number, matiereId: number, trimestre: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.BASE_URL}/notes/${eleveId}/matiere/${matiereId}/trimestre/${trimestre}`
    );
  }

  saveNote(note: any): Observable<any> {
    return this.http.post<any>(`${environment.BASE_URL}/notes/savenote`, note);
  }
  getMoyenneParEleveEtTrimestre(elId: number, trimestre: string): Observable<number> {
    return this.http.get<number>(`${environment.BASE_URL}/moyenne/${elId}/trimestre/${trimestre}`);
  }

  getMoyenneAnnuelle(elId: any) {
    return this.http.get<any>(`${environment.BASE_URL}/moyenne/${elId}/moyenne-annuelle`);
  }
}