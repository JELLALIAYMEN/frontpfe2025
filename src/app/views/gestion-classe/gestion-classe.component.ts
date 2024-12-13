import { Component } from '@angular/core';
import{ClasseService} from '../gestion-classe/classe.service'
@Component({
  selector: 'app-gestion-classe',
  templateUrl: './gestion-classe.component.html',
  styleUrls: ['./gestion-classe.component.scss']
})
export class GestionClasseComponent {
allclasse:any  ;
  constructor(private service : ClasseService){}
ngOnInit(){
this.service.allclasse().subscribe((res)=>{
  this.allclasse=res ; 
})
}
}
