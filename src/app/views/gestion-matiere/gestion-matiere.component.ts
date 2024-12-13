import { Component } from '@angular/core';
import{MatiereService} from '../gestion-matiere/matiere.service';
@Component({
  selector: 'app-gestion-matiere',
  templateUrl: './gestion-matiere.component.html',
  styleUrls: ['./gestion-matiere.component.scss']
})
export class GestionMatiereComponent {
  allmat:any ;
constructor(private service : MatiereService){}
ngOnInit(){
  this.service.allmatiere().subscribe((res)=>{
    this.allmat=res ; 
  })
}
}
