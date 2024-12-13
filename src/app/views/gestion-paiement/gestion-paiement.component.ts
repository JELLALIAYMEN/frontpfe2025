import { Component } from '@angular/core';
import { PaiemenyService } from './paiement.service';

@Component({
  selector: 'app-gestion-paiement',
  templateUrl: './gestion-paiement.component.html',
  styleUrls: ['./gestion-paiement.component.scss']
})
export class GestionPaiementComponent {
  allpay:any ;
  email:any ;
  allbyuser :any ;
  profil:any ;
constructor(private service : PaiemenyService){}
ngOnInit(){
  this.email=localStorage.getItem("email");
  this.profil=localStorage.getItem("profil");
  this.service.allpay().subscribe((res)=>{
    this.allpay=res ; 
  })
  this.service.allbyuser(this.email).subscribe((res)=>{
    this.allbyuser=res ; 
  })
}
}
