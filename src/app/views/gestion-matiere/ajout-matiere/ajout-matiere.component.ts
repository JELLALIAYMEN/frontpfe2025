import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartementService } from '../../departement/departement.service';
import { MatiereService } from '../matiere.service';

@Component({
  selector: 'app-ajout-matiere',
  templateUrl: './ajout-matiere.component.html',
  styleUrls: ['./ajout-matiere.component.scss']
})
export class AjoutMatiereComponent {
  matForm!: FormGroup;
  isEleveSelected = false;

  constructor(private router: Router,private Service :MatiereService) { }
  ngOnInit(): void {
    this.matForm = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      coefficient: new FormControl("", [Validators.required]),

    });
  }


  ajouter(){
    this.Service.addmatiere(this.matForm.value).subscribe((res)=>{
      console.log(res)
      if(res){
        window.alert("Ajout Matiere avec Succées")
        this.router.navigate(["gestion-matiere"]);

      }
      else{
       
      }
      },
      (error) => {
        window.alert("verifier")
      }
      )
  
  }
}
