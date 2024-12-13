import { Component } from '@angular/core';
import { DocumentService } from './doc.service';

@Component({
  selector: 'app-gestion-dcoument',
  templateUrl: './gestion-dcoument.component.html',
  styleUrls: ['./gestion-dcoument.component.scss']
})
export class GestionDcoumentComponent {
  alldoc :any ;
  constructor(private service :DocumentService){}
  ngOnInit(){
    this.service.alldoc().subscribe((res)=>{
      this.alldoc=res ; 
    })
  }
}
