import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { CONFIG } from "src/environement/environment";
@Injectable({
    providedIn:"root"
})
export class WidgetService{
  tokenn!:any;
constructor(private http : HttpClient,private route: ActivatedRoute){}
 
 countuser() {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.get(CONFIG.URL +  "users/countuser",{ headers: headers})}
    countmembre() {
        const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.http.get(CONFIG.URL +  "users/countmembre",{ headers: headers})}
        countjoueur() {
            const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
            let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set("Authorization", 'Bearer ' + user.token);
            return this.http.get(CONFIG.URL +  "users/countjoueur",{ headers: headers})}
            countdoc() {
                const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
                let headers = new HttpHeaders();
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set("Authorization", 'Bearer ' + user.token);
                return this.http.get(CONFIG.URL +  "users/countdoc",{ headers: headers})}
}