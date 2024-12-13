import { Component } from '@angular/core';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.scss']
})
export class DeconnexionComponent {
  ngOnInit(): void {
    
   // location.assign("http://localhost:4205/#/dashboard,{id:id}");
  window.location.href = 'http://localhost:4200' 

  }

}
