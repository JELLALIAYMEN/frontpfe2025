import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { CONFIG } from "../../../environement/environment";
@Injectable({
    providedIn:"root"
})
export class NoteService{
  tokenn!:any;
constructor(private http : HttpClient,private route: ActivatedRoute){}
 
 allnote() {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.get(CONFIG.URL +  "note/allnote",{ headers: headers})}
    allnotebyprof() {
      const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      return this.http.get(CONFIG.URL +  "note/notebyprof?emailprof="+localStorage.getItem("email"),{ headers: headers})}
   
      allnotebyeleve() {
        const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.http.get(CONFIG.URL +  "note/notebyeleve?emaileleve="+localStorage.getItem("email"),{ headers: headers})}
     
    emploibyuser() {
      const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      return this.http.get(CONFIG.URL +  "emploi/emploibyuser?email="+localStorage.getItem("email"),{ headers: headers})}
  
   //   return this.http.get<any>(`${CONFIG.URL}`,{ headers: headers})
   modifieruser(users:any) {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.post(CONFIG.URL +  "users/update",users,{ headers: headers})}
   
    saveMoyenne(e: any) {
      const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
      let headers = new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'Bearer ' + user.token);
    
      return this.http.post(CONFIG.URL + "moy/saveMoyenne?emailprof=" +localStorage.getItem("email"),e,
        { headers: headers, responseType: 'text' as const } // Spécifier le type de réponse
      );
    }
    afficher() {
      const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
      let headers = new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'Bearer ' + user.token);
    
        return this.http.get(CONFIG.URL +  "moy/afficher"),{ headers: headers}
      
    }
  
    
    allmoy() {
      const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
      let headers = new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'Bearer ' + user.token);
    
      return this.http.get(CONFIG.URL + "moy/afficher",
        { headers: headers } // Spécifier le type de réponse
      );
    }
    allmoybyuser(email:any) {
      const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
      let headers = new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'Bearer ' + user.token);
    
      return this.http.get(CONFIG.URL + "moy/afficherbyuser?email="+email,
        { headers: headers } // Spécifier le type de réponse
      );
    }

    creenote(e: any) {
        const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
        let headers = new HttpHeaders()
          .set('Content-Type', 'application/json; charset=utf-8')
          .set('Authorization', 'Bearer ' + user.token);
      
        return this.http.post(CONFIG.URL + "note/savenote?emailprof=" +localStorage.getItem("email"),e,
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
      affecter(emailparent:any,emaileleve:any) {
        const token = localStorage.getItem("token");
        let headers = new HttpHeaders()
        .set("Authorization", "Bearer " + token)
        .set("Content-Type", "application/json; charset=utf-8");
    
      const options = { headers: headers, responseType: "text" as const };
      return this.http.post(CONFIG.URL + "parent/affecter?emaileleve=" + emaileleve + "&emailparent=" + emailparent, null, options);}
    
    }
