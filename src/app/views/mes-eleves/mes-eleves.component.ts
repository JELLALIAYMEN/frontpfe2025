import { Component } from '@angular/core';
import { UserService } from '../gestion-utilisateur/userservice';

@Component({
  selector: 'app-mes-eleves',
  templateUrl: './mes-eleves.component.html',
  styleUrls: ['./mes-eleves.component.scss']
})
export class MesElevesComponent {
  alleleve:any ;
constructor(private service:UserService){}
ngOnInit(){
  this.service.affichermeseleve().subscribe((res)=>{
    this.alleleve=res ; 
    console.log(this.alleleve)
  })
}
eleve(email:any){
  if(localStorage.getItem("email-eleve")==null){
    localStorage.setItem("email-eleve", email);
    window.alert("Voila ! tu peux consulter les données de : "+localStorage.getItem("email-eleve"))
  }
else{
  localStorage.removeItem("email-eleve")
  localStorage.setItem("email-eleve", email);
  window.alert("Voila ! tu peux consulter les données de : "+localStorage.getItem("email-eleve"))


}
}
}
