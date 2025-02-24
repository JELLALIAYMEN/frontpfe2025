import { Component } from '@angular/core';
import { TypePaiementService } from 'src/app/services/typepaiementservice';

@Component({
  selector: 'app-gestion-type-paiement',
  templateUrl: './gestion-type-paiement.component.html',
  styleUrls: ['./gestion-type-paiement.component.scss']
})
export class GestionTypePaiementComponent {
alltype:any ;
  constructor(private service : TypePaiementService){}
ngOnInit(){
  this.service.afficherTypePaiement().subscribe((res)=>{
    this.alltype=res ; 
    console.log(this.alltype)
  })
}
}
