import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { CONFIG } from "../../../environement/environment";
@Injectable({
    providedIn:"root"
})
export class DocumentService{
  tokenn!:any;
constructor(private http : HttpClient,private route: ActivatedRoute){}
 
 alldoc() {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.get(CONFIG.URL +  "document/all",{ headers: headers})}
    docbyid(id:any) {
        const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.http.get(CONFIG.URL +  "document/docbyid?id="+id,{ headers: headers})}
     
    adddoc(doc:any,nlicence:any) {
      const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      return this.http.post(CONFIG.URL +  "document/add?nlicence="+nlicence,doc,{ headers: headers})}
  
}