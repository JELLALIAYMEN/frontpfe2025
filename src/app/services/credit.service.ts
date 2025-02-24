import { animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }

  affichercredit(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.BASE_URL}/credit/afficher`);
  }
  ajoutcredit(type:any,matricule:any): Observable<any[]> {
    return this.http.post<any[]>(`${environment.BASE_URL}/credit/ajout?type=`+type+'&matricule='+matricule,null);
  }
  afficherbymatricule(matricule:any): Observable<any[]> {
    return this.http.get<any[]>(`${environment.BASE_URL}/credit/afficherbymatricule?matricule=`+matricule );
  }
  
  afficherbyclasse(id:any): Observable<any[]> {
    return this.http.get<any[]>(`${environment.BASE_URL}/credit/afficherbyclasse?id=`+id );
  }

  
  allclasse(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.BASE_URL}/classe/afficher`);
  }


}
