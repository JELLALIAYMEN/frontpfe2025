import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypePaiementService {

  constructor(private http: HttpClient) { }

  afficherTypePaiement(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.BASE_URL}/typepaiement/afficher`);
  }
}
