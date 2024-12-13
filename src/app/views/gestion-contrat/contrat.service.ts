import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { CONFIG } from "../../../environement/environment";
@Injectable({
    providedIn:"root"
})
export class ContratService{
  tokenn!:any;
constructor(private http : HttpClient,private route: ActivatedRoute){}
 
 allcontrat() {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.get(CONFIG.URL +  "contrat/all",{ headers: headers})}

   //   return this.http.get<any>(`${CONFIG.URL}`,{ headers: headers})
   
   addcontrat(contrat:any,nlicence:any) {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.post(CONFIG.URL +  "contrat/add?nlicence="+nlicence,contrat,{ headers: headers})}

}