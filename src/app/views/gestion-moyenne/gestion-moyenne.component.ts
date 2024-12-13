import { Component } from '@angular/core';
import { NoteService } from '../gestion-note/noe.service';

@Component({
  selector: 'app-gestion-moyenne',
  templateUrl: './gestion-moyenne.component.html',
  styleUrls: ['./gestion-moyenne.component.scss']
})
export class GestionMoyenneComponent {
allmoy:any  ;
profil:any ; 
email:any ;
allbyeleve:any ;
emaileleve:any ;
allbyelevebyparent:any ;
constructor(private service:NoteService){}
ngOnInit(){
  this.emaileleve = localStorage.getItem("email-eleve");

  this.email=localStorage.getItem("email")
this.profil=localStorage.getItem("profil")
this.service.allmoy().subscribe((res)=>{
  console.log(res)
  this.allmoy=res  ;
})
this.service.allmoybyuser(this.email).subscribe((res)=>{
  this.allbyeleve=res ; 
})
this.service.allmoybyuser(this.emaileleve).subscribe((res)=>{
  this.allbyelevebyparent=res ; 
})
}
}
