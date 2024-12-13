import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CONFIG } from "../../../environement/environment";

@Injectable({
    providedIn:"root"
})
export class Coursservice{
    constructor(private http : HttpClient){}
    allcours(){
        return this.http.get(CONFIG.URL+"cours/all");
    }
    allbyeleve(email:any){
        return this.http.get(CONFIG.URL+"cours/allbyeleve?email="+email);

    }
    allbyprof(){
        return this.http.get(CONFIG.URL+"cours/allbyprof?email="+localStorage.getItem('email'));

    }
}