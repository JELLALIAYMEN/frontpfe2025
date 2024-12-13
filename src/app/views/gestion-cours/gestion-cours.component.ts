import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CONFIG } from 'src/environement/environment';
import{Coursservice} from '../gestion-cours/cour.service';
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
allbyprof:any ; 
constructor(private service : Coursservice,private http: HttpClient,private sanitizer: DomSanitizer){}
ngOnInit(){
  this.email=localStorage.getItem("email")
  this.profil=localStorage.getItem("profil")
this.service.allcours().subscribe((res)=>{
  this.allcours=res ;
})
this.service.allbyeleve(this.email).subscribe((res)=>{
  this.allbyeleve=res ; 
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
