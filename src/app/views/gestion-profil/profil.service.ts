import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { CONFIG } from "../../../environement/environment";
@Injectable({
    providedIn:"root"
})
export class ProfilService{
  tokenn!:any;
constructor(private http : HttpClient,private route: ActivatedRoute){}
 
 user() {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    const email = localStorage.getItem("email")
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.get(CONFIG.URL +  "users/getbyemail?email="+email,{ headers: headers})}
    userbyid(id:any) {
      const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      return this.http.get(CONFIG.URL +  "users/getbyid?id="+id,{ headers: headers})}
  
  
}