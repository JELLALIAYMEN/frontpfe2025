import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';  // Make sure to import environment

@Injectable({
  providedIn: 'root',
})
export class SousclassService {

  private baseUrl: string = environment.BASE_URL;  // Reference BASE_URL from environment

  constructor(private http: HttpClient) {}
  addSousclass(sousclass: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/sousclass/add`, sousclass);
  }

  // Get all Sousclasses
  getSousClasses(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }


}
