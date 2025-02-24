import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualiesService {

  private apiUrl = 'http://localhost:8099/actualite';
  constructor(private http: HttpClient) { }

  // Méthode pour créer une actualité avec des fichiers
  createActualite(actualite: any, video: File | null, fichier: File | null): Observable<any> {
    const formData = new FormData();
  
    formData.append('actualite', new Blob([JSON.stringify(actualite)], { type: 'application/json' })); // Force le type JSON
  
    if (video) {
      formData.append('video', video, video.name);
    }
  
    if (fichier) {
      formData.append('fichier', fichier, fichier.name);
    }
  
    return this.http.post<any>(this.apiUrl, formData); 
  }
  getAllActualites(page: number = 0, size: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(`${this.apiUrl}/all`, { params });
  }

  getActualitesByCible(profil: string, page: number = 0, size: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('profil', profil.toString());

    return this.http.get<any>(`${this.apiUrl}/par-profil`, { params });
  }

  getActualiteViode(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/video`, { responseType: 'blob' }).pipe(
      map((blob: Blob) => {
        return URL.createObjectURL(blob);
      })
    );
  }
  getActualiteFile(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/file`, { responseType: 'blob' }).pipe(
      map((blob: Blob) => {
        return URL.createObjectURL(blob);
      })
    );
  }
}
