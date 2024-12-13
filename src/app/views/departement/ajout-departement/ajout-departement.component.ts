import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartementService } from '../departement.service';

@Component({
  selector: 'app-ajout-departement',
  templateUrl: './ajout-departement.component.html',
  styleUrls: ['./ajout-departement.component.scss']
})
export class AjoutDepartementComponent {
  departForm!: FormGroup;
  isEleveSelected = false;

  constructor(private router: Router,private Service :DepartementService) { }
  ngOnInit(): void {
    this.departForm = new FormGroup({
      nom: new FormControl("", [Validators.required]),
    });
  }


  ajouter(){
    this.Service.adddepartement(this.departForm.value).subscribe((res)=>{
      console.log(res)
      if(res){
        window.alert("Ajout Departement avec Succées")
        this.router.navigate(["gestion-departement"]);

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
