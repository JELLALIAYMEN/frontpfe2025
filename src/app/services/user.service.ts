import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUserById(id: number): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/users/getbyid/${id}`);
  }
  userbyemail(email: string): Observable<any> { 
    return this.http.get(`${environment.BASE_URL}/users/getbyemail?email=${email}`);
  }
  getUsers(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/users/GetAllUser`);
  }
  getElevesByClass(classe: string): Observable<any[]> {
    const params = new HttpParams().set('classe', classe);
    return this.http.get<any[]>(`${environment.BASE_URL}/users/eleveByClass`, { params });
  }
  deleteUser(idUtilisateur: any): Observable<any> {
    return this.http.delete(`${environment.BASE_URL}/users/delete/${idUtilisateur}`);
  }
  updateUser(utilisateur: any,id: number) {
    return this.http.put(`${environment.BASE_URL}/users/update/${id}`, utilisateur);
  }
  countEleve(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/users/count-eleves`);
  }
  countEnseignant(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/users/count-enseignants`);
  }
}

