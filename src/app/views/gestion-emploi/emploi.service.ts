import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { CONFIG } from "../../../environement/environment";
@Injectable({
    providedIn:"root"
})
export class EmploiService{
  tokenn!:any;
constructor(private http : HttpClient,private route: ActivatedRoute){}
 
 allemploi() {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.get(CONFIG.URL +  "emploi/allemploi",{ headers: headers})}
    emploibyuser() {
      const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      return this.http.get(CONFIG.URL +  "emploi/emploibyuser?email="+localStorage.getItem("email"),{ headers: headers})}
  
      emploibyclasse(classe:any) {
        const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.http.get(CONFIG.URL +  "emploi/emploibyclasse?classe="+classe,{ headers: headers})}
    
   //   return this.http.get<any>(`${CONFIG.URL}`,{ headers: headers})
   modifieruser(users:any) {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.post(CONFIG.URL +  "users/update",users,{ headers: headers})}
   
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
    addEleve(users:any,classe:any) {
      const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      return this.http.post(CONFIG.URL +  "users/add?nomclasse="+classe,users,{ headers: headers})}
     
   
    archiver(id:any) {
      const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      return this.http.post(CONFIG.URL +  "users/archiver?id="+id,{ headers: headers})}
      supprimer(id:any) {
        const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.http.delete(CONFIG.URL +  "emploi/supprimer?id="+id,{})}
      affecter(emailparent:any,emaileleve:any) {
        const token = localStorage.getItem("token");
        let headers = new HttpHeaders()
        .set("Authorization", "Bearer " + token)
        .set("Content-Type", "application/json; charset=utf-8");
    
      const options = { headers: headers, responseType: "text" as const };
      return this.http.post(CONFIG.URL + "parent/affecter?emaileleve=" + emaileleve + "&emailparent=" + emailparent, null, options);}
    
    }
