import { Component } from '@angular/core';
import { DepartementService } from '../departement/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent {
  constructor(private service : DepartementService){}
  alldepart :any ;
ngOnInit(){
  this.service.alldepartement().subscribe((res)=>{
    this.alldepart=res ; 
    console.log(this.alldepart)
  })
}
}
