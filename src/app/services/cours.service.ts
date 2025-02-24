import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursService {


  constructor(private http: HttpClient) {}

  addCourse(formData: FormData): Observable<any> {
    return this.http.post(`${environment.BASE_URL}/cours/ajouterRapport`, formData);
  }
  getAllCours(email: string): Observable<any> {
    return this.http.get<any[]>(`${environment.BASE_URL}/cours/by-email?email=${email}`);
  }
  getFichierCours(id: number): Observable<Blob> {
    return this.http.get(`${environment.BASE_URL}/cours/getFichierCours/${id}`, {responseType: 'blob'});
  }
  getCoursByClasse(classeId: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.BASE_URL}/cours/classe/${classeId}`);
  }
}
