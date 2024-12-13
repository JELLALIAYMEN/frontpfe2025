import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JoueurService } from '../../gestion-joueur/joueur.service';
import { Router } from '@angular/router';
import { ContratService } from '../contrat.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.scss']
})
export class AddContratComponent {
  alluser :any ;
  contratForm!: FormGroup;
  email :any;
  allj:any ;
  constructor(private servicejoueur:JoueurService,private router: Router,private service : ContratService){}
  ngOnInit(){
    this.email=localStorage.getItem('email')
    this.servicejoueur.alljoueur().subscribe((res)=>{
      this.allj =res
    })
    this.contratForm = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      type: new FormControl("", [Validators.required]),
      dure: new FormControl("", [Validators.required]),
      nature: new FormControl("", [Validators.required]),
      nlicence: new FormControl("", [Validators.required]),
     
    });
  
  }
  ajouter(){
    this.service.addcontrat(this.contratForm.value,this.contratForm.value.nlicence).subscribe((res)=>{
    window.alert("Ajout Contrat avec Succées")
    this.router.navigate(["gestion-contrat"]);
  
  },
  (error) => {
    window.alert("Vérifier les cordonnées")
  })
   }

}
