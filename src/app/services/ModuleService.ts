import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface Module {
  id?: number;
  nommodule: string;
  matricule: string;
  contenue: string;
  travailafaire: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
    private apiUrl = 'http://localhost:8099';

  constructor(private http: HttpClient) {}
  saveModule(module: any, matricule: string) {
    const token = localStorage.getItem("token")
    let headers = new HttpHeaders()
    .set("Authorization","Bearer "+token)
    .set("content-Type","application/json;charqet=utf-8")
    const options = {headers:headers}
    const url = `${this.apiUrl}/module/save/${matricule}`;  // Constructeur de l'URL pour l'endpoint
    return this.http.post(url, module,options);  // Envoi de la requête POST
  }
  getModulesByMatricule() {
    return this.http.get(this.apiUrl+"/module/utilisateur/matricule/modules?matricule="+localStorage.getItem("matricule"));
  }

  envoyertravaille(email:any, idmodule:any) {
    return this.http.post(this.apiUrl+"/module/envoyertravaille?email="+email+"&idmodule="+idmodule,null);
  }
  deleteModule(id: number): Observable<any> {
    const url = `${this.apiUrl}/module/${id}`;  // "module" au lieu de "modules"
    return this.http.delete(url);
  }


  updateModule(id: number, updatedModule: Module): Observable<Module> {
    const url = `${this.apiUrl}/modules/${id}`;  // Construct URL for PUT request
    return this.http.put<Module>(url, updatedModule);  // Send PUT request
  }
  getAllModules() {
    const url = `${this.apiUrl}/module/all`; // URL pour récupérer tous les modules
    return this.http.get(url);
  }

}
