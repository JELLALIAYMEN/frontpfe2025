import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-demande-menu',
  templateUrl: './demande-menu.component.html',
  styleUrls: ['./demande-menu.component.scss']
})
export class DemandeMenuComponent {
  allresparemail :any ;
  alla:any ;
  profil:any ;
constructor(private service : MenuService){}
ngOnInit(){
  this.profil=localStorage.getItem('profil')
  this.service.afficherbyemail().subscribe((res)=>{
    this.allresparemail=res  ;
  })
  this.service.afficherallreservation().subscribe((res)=>{
    this.alla=res ; 
  })

}



}
