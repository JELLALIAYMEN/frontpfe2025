import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import{Coursservice} from '../gestion-cours/cour.service';
import { CONFIG } from '../../../environement/environment';
@Component({
  selector: 'app-gestion-cours',
  templateUrl: './gestion-cours.component.html',
  styleUrls: ['./gestion-cours.component.scss']
})
export class GestionCoursComponent {
  allcours:any ;
  aff =false ;
  pdfSrc!: SafeResourceUrl;
profil:any ;
email:any ;
allbyeleve:any  ;
emaileleve:any
allbyprof:any ; 
allbyeleveparent:any ;
constructor(private service : Coursservice,private http: HttpClient,private sanitizer: DomSanitizer){}
ngOnInit(){
  this.email=localStorage.getItem("email")
  this.emaileleve=localStorage.getItem("email-eleve")

  this.profil=localStorage.getItem("profil")
this.service.allcours().subscribe((res)=>{
  this.allcours=res ;
})
this.service.allbyeleve(this.email).subscribe((res)=>{
  this.allbyeleve=res ; 
})
this.service.allbyeleve(this.emaileleve).subscribe((res)=>{
  this.allbyeleveparent=res ; 
})
this.service.allbyprof().subscribe((res)=>{
this.allbyprof=res ; 
})
}
getPdf(id: number) {
  return this.http.get(CONFIG.URL+'cours/pdf?id=' + id, { responseType: 'blob' });
}

loadPdf(id: number) {
  this.getPdf(id).subscribe(blob => {
    const url = window.URL.createObjectURL(blob);
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });
}

refrech(){
  window.location.reload()
}
Accepter(id:any){
 }
Refuser(id:any){
 
}
}
