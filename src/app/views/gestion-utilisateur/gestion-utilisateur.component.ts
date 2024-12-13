import { Component } from '@angular/core';
import {UserService} from '../gestion-utilisateur/userservice';
@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.scss']
})
export class GestionUtilisateurComponent {
  alluser :any ;
  constructor(private service : UserService){}
  ngOnInit(){
    this.service.alluser().subscribe((res)=>{
      this.alluser=res;
      console.log(this.alluser)
    })
  }
archiver(id:any){
  this.service.archiver(id).subscribe((res)=>{
window.alert("vous avez archiver l'utilisateur")  })
}
}
