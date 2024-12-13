import { Component } from '@angular/core';
import { PrimeService } from './prime.service';

@Component({
  selector: 'app-gestion-prime',
  templateUrl: './gestion-prime.component.html',
  styleUrls: ['./gestion-prime.component.scss']
})
export class GestionPrimeComponent {
  allprime :any ;
  constructor(private service : PrimeService){}
  ngOnInit(){
    this.service.allprime().subscribe((res)=>{
      this.allprime=res;
      console.log(this.allprime)
    })
  }

}
