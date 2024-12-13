import { Component } from '@angular/core';
import {SalleService} from '../gestion-salle/salle.service';

@Component({
  selector: 'app-gestion-salle',
  templateUrl: './gestion-salle.component.html',
  styleUrls: ['./gestion-salle.component.scss']
})
export class GestionSalleComponent {
allsalle:any ;
  constructor(private service : SalleService){}
ngOnInit(){
  this.service.allsalle().subscribe((res)=>{
this.allsalle=res ;
  })
}
}
