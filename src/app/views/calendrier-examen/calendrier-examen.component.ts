import { Component } from '@angular/core';
import { CalendrierService } from './calendrier.seervice';

@Component({
  selector: 'app-calendrier-examen',
  templateUrl: './calendrier-examen.component.html',
  styleUrls: ['./calendrier-examen.component.scss']
})
export class CalendrierExamenComponent {
  allemploi:any ;
  allemploibyprof:any ;
  profil:any ;
  email:any ;
  allbuprof:any  ;
    constructor(private service: CalendrierService){}
  
  ngOnInit(){
    this.profil=localStorage.getItem("profil")
  this.service.allcalendrier().subscribe((res)=>{
    this.allemploi=res ;
  })
  this.service.getbyemail().subscribe((res)=>{
    this.email=res;
    this.service.afficherbyclasse(this.email.classe.nomclasse).subscribe((res)=>{
      this.allemploibyprof=res ;
    
    })
 

  })



  this.service.afficherbyprof().subscribe((res)=>{
    this.allbuprof=res ; 
    })
  }
  supprimer(id:any){
    this.service.supprimer(id).subscribe((res)=>{
      window.alert("Supprimer avec Sccées")
      window.location.reload()  
    })
  }
}
