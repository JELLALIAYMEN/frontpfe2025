import { Component } from '@angular/core';
import { EmploiService } from './emploi.service';
import { UserService } from '../gestion-utilisateur/userservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestion-emploi',
  templateUrl: './gestion-emploi.component.html',
  styleUrls: ['./gestion-emploi.component.scss']
})
export class GestionEmploiComponent {
allemploi:any ;
allemploibyprof:any ;
profil:any ;
email:any ;
allbyclasse:any ;
u:any ;
emaileleve:any;
allbyclassebyparent:any;
  constructor(private service: EmploiService,private route:ActivatedRoute,private userservice: UserService){}

ngOnInit(){
  this.emaileleve = localStorage.getItem("email-eleve");

  this.email=localStorage.getItem("email");
  this.profil=localStorage.getItem("profil")
this.service.allemploi().subscribe((res)=>{
  this.allemploi=res ;
})


this.userservice.getbyemail(this.email).subscribe((res)=>{
this.u=res; 
this.service.emploibyclasse(this.u.classe.nomclasse).subscribe((res)=>{
this.allbyclasse=res ;
})


})


this.userservice.getbyemail(this.emaileleve).subscribe((res)=>{
  this.u=res; 
  this.service.emploibyclasse(this.u.classe.nomclasse).subscribe((res)=>{
  this.allbyclassebyparent=res ;
  })
  
  
  })

this.service.emploibyuser().subscribe((res)=>{
  this.allemploibyprof=res ;
})
}
supprimer(id:any){
  this.service.supprimer(id).subscribe((res)=>{
    window.alert("Supprimer avec Sccées")
    window.location.reload()  
  })
}}
