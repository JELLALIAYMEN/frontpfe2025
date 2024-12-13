import { Component } from '@angular/core';
import { EmploiService } from './emploi.service';
import { UserService } from '../gestion-utilisateur/userservice';

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
  constructor(private service: EmploiService,private userservice: UserService){}

ngOnInit(){
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
