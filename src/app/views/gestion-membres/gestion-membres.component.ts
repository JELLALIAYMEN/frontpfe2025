import { Component } from '@angular/core';
import{MembreService} from '../gestion-membres/membre.service'
@Component({
  selector: 'app-gestion-membres',
  templateUrl: './gestion-membres.component.html',
  styleUrls: ['./gestion-membres.component.scss']
})
export class GestionMembresComponent {
  allmembre :any ;
  constructor(private service : MembreService){}
  ngOnInit(){
    this.service.allmembre().subscribe((res)=>{
      this.allmembre=res;
      console.log(this.allmembre)
    })
  }
  delete(id:any){
    this.service.delete(id).subscribe((res)=>{
      window.alert("vous avez supprimer le membre")
    })
  }
}
