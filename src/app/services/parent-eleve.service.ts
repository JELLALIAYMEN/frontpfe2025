import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
interface ParentEleve {
  parent: any;
  eleve: any;
}

@Injectable({
  providedIn: 'root'
})
export class ParentEleveService {

  constructor(private http: HttpClient) { }

  // Méthode pour affecter un parent à un élève
  affecter(emailparent: string, emaileleve: string): Observable<any> {
    const url = `${environment.BASE_URL}/parent/affecter/${emailparent}/${emaileleve}`;
    return this.http.post<any>(url,{});
  } 


  // Méthode pour afficher les élèves d'un parent
  afficherMesEleves(emailparent: string): Observable<ParentEleve[]> {
    const url = `${environment.BASE_URL}/parent/affichermeseleve/${emailparent}`;
    return this.http.get<ParentEleve[]>(url);
  }
}
