import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { CONFIG } from "../../../environement/environment";
@Injectable({
    providedIn:"root"
})
export class PaiemenyService{
  tokenn!:any;
constructor(private http : HttpClient,private route: ActivatedRoute){}
 
 allpay() {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.get(CONFIG.URL +  "pay/all",{})}

    allbyuser(email:any ) {
        const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.http.get(CONFIG.URL +  "pay/allbyuser?email="+email,{})}
    

    
    userbyid(id:any) {
      const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      return this.http.get(CONFIG.URL +  "users/getbyid?id="+id,{ headers: headers})}
  
   //   return this.http.get<any>(`${CONFIG.URL}`,{ headers: headers})
   modifieruser(users:any) {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.post(CONFIG.URL +  "users/update",users,{ headers: headers})}
   
   addpay(p:any,email:any) {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.post(CONFIG.URL +  "pay/ajout?email="+email,p,{ headers: headers})}
   
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
