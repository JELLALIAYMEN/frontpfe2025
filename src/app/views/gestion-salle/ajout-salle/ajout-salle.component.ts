import { Component } from '@angular/core';
import { SalleService } from '../salle.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartementService } from '../../departement/departement.service';

@Component({
  selector: 'app-ajout-salle',
  templateUrl: './ajout-salle.component.html',
  styleUrls: ['./ajout-salle.component.scss']
})
export class AjoutSalleComponent {
  salleForm!: FormGroup;
  dep:any ;
  constructor(private router: Router,private Service :SalleService,private depservice:DepartementService) { }
  ngOnInit(): void {
    this.depservice.alldepartement().subscribe((res)=>{
      this.dep=res ; 
    })
    this.salleForm = new FormGroup({
      nomdesalle: new FormControl("", [Validators.required]),
      departement: new FormControl("", [Validators.required]),
 
    });
  }


  ajouter(){
    let salle={
      nomdesalle:this.salleForm.value.nomdesalle
    }
    this.Service.addsalle(salle,this.salleForm.value.departement).subscribe((res)=>{
      console.log(res)
      if(res){
        window.alert("Ajout Salle avec Succées")
        this.router.navigate(["gestion-salle"]);
      }
      else{
       
      }
      },
      (error) => {
        window.alert("Erreur")
      }
      )
  
  }

}
