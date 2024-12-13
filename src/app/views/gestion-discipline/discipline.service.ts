import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { CONFIG } from "../../../environement/environment";
@Injectable({
    providedIn:"root"
})
export class DisciplineService{
  tokenn!:any;
constructor(private http : HttpClient,private route: ActivatedRoute){}
 
 alldiscipline() {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.get(CONFIG.URL +  "discipline/all",{})}
    allbyelleve() {
      const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      return this.http.get(CONFIG.URL +  "discipline/allbyelleve?email="+localStorage.getItem("email"),{})}
  
      allbyprof() {
        const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.http.get(CONFIG.URL +  "discipline/allbyprof?email="+localStorage.getItem("email"),{})}
    
   //   return this.http.get<any>(`${CONFIG.URL}`,{ headers: headers})
   
    creeremploi(e: any, email: any, salle: any, matiere: any, classe: any) {
        const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
        let headers = new HttpHeaders()
          .set('Content-Type', 'application/json; charset=utf-8')
          .set('Authorization', 'Bearer ' + user.token);
      
        return this.http.post(
          CONFIG.URL + "emploi/creeremploi?email=" + email + "&salle=" + salle + "&matiere=" + matiere + "&classe=" + classe,
          e,
          { headers: headers, responseType: 'text' as const } // Spécifier le type de réponse
        );
      }
    adddiscipline(type:any,emaileleve:any) {
      const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      return this.http.post(CONFIG.URL +  "discipline/creer?type="+type+"&emaileleve="+emaileleve+"&emailprof="+localStorage.getItem("email"),{ })}
     
   
    }
