import { Component } from '@angular/core';
import { DisciplineService } from './discipline.service';

@Component({
  selector: 'app-gestion-discipline',
  templateUrl: './gestion-discipline.component.html',
  styleUrls: ['./gestion-discipline.component.scss']
})
export class GestionDisciplineComponent {
alldiscipline:any ;
profil:any ;
allbyprof:any ;
allbyeleve:any   ;
  constructor(private service : DisciplineService){}
ngOnInit(){
  this.profil=localStorage.getItem("profil")
this.service.alldiscipline().subscribe((res=>{
this.alldiscipline=res ;}))
this.service.allbyprof().subscribe((res)=>{
this.allbyprof=res ;
})
this.service.allbyelleve().subscribe((res)=>{
  this.allbyeleve=res
})
}
}
