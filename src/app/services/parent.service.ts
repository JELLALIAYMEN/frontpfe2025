import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }

  getMesEleves(emailParent: string): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}/parent/affichermeseleve/${emailParent}`);
  }
}
