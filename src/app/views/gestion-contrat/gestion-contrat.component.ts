import { Component } from '@angular/core';
import{ContratService}  from '../gestion-contrat/contrat.service'
@Component({
  selector: 'app-gestion-contrat',
  templateUrl: './gestion-contrat.component.html',
  styleUrls: ['./gestion-contrat.component.scss']
})
export class GestionContratComponent {
  allcontrat :any ;
  constructor(private service : ContratService){}
  ngOnInit(){
    this.service.allcontrat().subscribe((res)=>{
      this.allcontrat=res;
      console.log(this.allcontrat)
    })
  }
}
