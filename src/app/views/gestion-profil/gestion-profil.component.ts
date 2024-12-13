import { Component } from '@angular/core';
import{ProfilService} from'../gestion-profil/profil.service'
@Component({
  selector: 'app-gestion-profil',
  templateUrl: './gestion-profil.component.html',
  styleUrls: ['./gestion-profil.component.scss']
})
export class GestionProfilComponent {
user :any ;
constructor(private service : ProfilService){}
  ngOnInit(){
this.service.user().subscribe((res)=>{
  this.user=res ;
})
  }
}
