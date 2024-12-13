import { Component } from '@angular/core';
import {MenuService} from '../gestion-menu/menu.service'
import { withNoXsrfProtection } from '@angular/common/http';
@Component({
  selector: 'app-gestion-menu',
  templateUrl: './gestion-menu.component.html',
  styleUrls: ['./gestion-menu.component.scss']
})
export class GestionMenuComponent {
  allmenu :any ;
  profil:any ;
constructor(private service : MenuService){}
ngOnInit(){
  this.profil=localStorage.getItem('profil')
  this.service.allmenu().subscribe((res)=>{
    this.allmenu=res ;
  })
}
reservation(id:any){
  this.service.reservation(id).subscribe((res)=>{
    window.alert("Reservation Menu Avec Succées")
    window.location.reload()
  })
}
}
