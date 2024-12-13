import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { CONFIG } from "../../../environement/environment";
@Injectable({
    providedIn:"root"
})
export class MenuService{
  tokenn!:any;
constructor(private http : HttpClient,private route: ActivatedRoute){}
 
 allmenu() {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.get(CONFIG.URL +  "menu/afficher",{ headers: headers})}

    menubyid(id:any) {
      const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      return this.http.get(CONFIG.URL +  "menu/afficherbyid?id="+id,{ headers: headers})}
  
   //   return this.http.get<any>(`${CONFIG.URL}`,{ headers: headers})
   
   
   affichermenu(id:any) {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.get(CONFIG.URL +  "menu/afficher",{})}

   
   
   modifieruser(users:any) {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.post(CONFIG.URL +  "users/update",users,{ headers: headers})}
   
    creer(e: any) {
        const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
        let headers = new HttpHeaders()
          .set('Content-Type', 'application/json; charset=utf-8')
          .set('Authorization', 'Bearer ' + user.token);
      
        return this.http.post(
          CONFIG.URL + "menu/creer",e,
          { headers: headers, responseType: 'text' as const } // Spécifier le type de réponse
        );
      }
      moodifier(e: any) {
        const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
        let headers = new HttpHeaders()
          .set('Content-Type', 'application/json; charset=utf-8')
          .set('Authorization', 'Bearer ' + user.token);
      
        return this.http.put(
          CONFIG.URL + "menu/update",e,
          { headers: headers, responseType: 'text' as const } // Spécifier le type de réponse
        );
      }
    
      reservation(idmenu:any) {

        const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
        let headers = new HttpHeaders()
          .set('Content-Type', 'application/json; charset=utf-8')
          .set('Authorization', 'Bearer ' + user.token);
          console.log(user.token)
      
        return this.http.post(
          CONFIG.URL + "reservation/creer?email="+localStorage.getItem("email")+"&idmenu="+idmenu,{});
     }
      
     afficherbyemail() {

        return this.http.get(
          CONFIG.URL + "reservation/afficherbyemail?email="+localStorage.getItem("email"));
     } 
     afficherallreservation() {

        return this.http.get(
          CONFIG.URL + "reservation/afficher");
     }
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
