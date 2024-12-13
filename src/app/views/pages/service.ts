import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { CONFIG } from "../../../environement/environment";
@Injectable({
    providedIn:"root"
})
export class LoginService{
  tokenn!:any;
constructor(private http : HttpClient,private route: ActivatedRoute){}
 login(credentials:any) {
    return this.http.post<any>(`${CONFIG.URL}auth/login2`, credentials).pipe(
      map((user) => {
        if (user && user.token) {
          //if user is found and token exists store it
          localStorage.setItem("currentUser", JSON.stringify(user));
          return user;
        }
      })
    );
  }
  envoyeremail(email:any) {
    const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.post(CONFIG.URL +  "users/envoyeremail?email="+email,{ headers: headers})}
    verifieremail(email:any) {
      const user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
      return this.http.get(CONFIG.URL +  "users/getbyemail?email="+email,{ headers: headers})}
   
}