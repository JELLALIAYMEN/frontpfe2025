import { Component } from '@angular/core';
import {JoueurService} from '../gestion-joueur/joueur.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestion-joueur',
  templateUrl: './gestion-joueur.component.html',
  styleUrls: ['./gestion-joueur.component.scss']
})
export class GestionJoueurComponent {
  alljoueur :any ;
  constructor(private service : JoueurService,private router: Router){}
  ngOnInit(){
    this.service.alljoueur().subscribe((res)=>{
      this.alljoueur=res;
      console.log(this.alljoueur)
    })
  }
  delete(id:any){
    this.service.deletejoueur(id).subscribe((res)=>{
      window.alert("vous avez supprimez le joueur")
      this.router.navigate(["dashboard"]);

    })
  }
}
