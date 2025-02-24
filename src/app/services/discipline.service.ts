import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {
  private baseUrl = `${environment.BASE_URL}/discipline`;

  constructor(private http: HttpClient) {}

  // Ajouter une discipline
  ajouterDiscipline(file: File, cause: string, eleveId: number, enseignantId: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('cause', cause);
    formData.append('eleveId', eleveId.toString());
    formData.append('enseignantId', enseignantId.toString());

    return this.http.post(`${this.baseUrl}/add`, formData);
  }

  // Obtenir une discipline par ID
  getDisciplineById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getDisciplines(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  // Lister les disciplines pour un enseignant
  listDisciplinesByEnseignant(enseignantId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/byEnseignant`, {
      params: { enseignantId: enseignantId.toString() }
    });
  }

  // Lister les disciplines pour un eleve
  getDisciplinesByStudentId(eleveId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/byeleve`, {
      params: { eleveId: eleveId.toString() }
    });
  }

  // Mettre à jour une discipline
  updateDiscipline(
    id: number,
    cause?: string,
    file?: File,
  ): Observable<any> {
    const formData = new FormData();
    if (cause) formData.append('cause', cause);
    if (file) formData.append('file', file);

    return this.http.put(`${this.baseUrl}/update/${id}`, formData);
  }

  // Supprimer une discipline
  deleteDiscipline(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // Changer le statut d'une discipline
  sendToAdmin(id: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}/sendToAdmin`, null);
  }

  validerOuRefuser(id: number, status: string, adminComment: string): Observable<any> {
    const params = { status: status, adminComment: adminComment };
    return this.http.put(`${this.baseUrl}/validerOuRefuser/${id}`, null, { params });
  }
  getDisciplineViode(id: number): Observable<string> {
    return this.http.get(`${this.baseUrl}/${id}/video`, { responseType: 'blob' }).pipe(
      map((blob: Blob) => {
        return URL.createObjectURL(blob);
      })
    );
  }
  
}
