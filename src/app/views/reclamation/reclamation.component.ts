import { Component } from '@angular/core';
import {ReclamationService} from '../reclamation/reclamation.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent {
allrec :any ;
allbyemail:any ;
profil:any  ;
affichage=false ; 
recform!:FormGroup ;
repo:any ;
id:any ;
allbyemailparent:any ;
  constructor(private service : ReclamationService){}
ngOnInit(){
  this.recform = new FormGroup({
    resultat: new FormControl("", [Validators.required]),
  });
  this.profil=localStorage.getItem('profil')
  this.service.allrec().subscribe((res)=>{
    this.allrec=res ;
  })
  this.service.afficherbyemail().subscribe((res)=>{
    this.allbyemail=res ; 
  })
  this.service.afficherbyemailparent().subscribe((res)=>{
    this.allbyemailparent=res ;
  })
}
rep(id:any){
this.affichage=true ; 
this.id=id ; 
}
reponse(){
  this.service.rep(this.id,this.recform.value.resultat).subscribe((res)=>{
    window.alert("Réponse ajouter avec succée")
    window.location.reload()
  })
}
}