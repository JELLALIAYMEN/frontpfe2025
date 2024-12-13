import { Component } from '@angular/core';
import { ClasseService } from '../classe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-classe',
  templateUrl: './ajout-classe.component.html',
  styleUrls: ['./ajout-classe.component.scss']
})
export class AjoutClasseComponent {
  classform!: FormGroup;
  isEleveSelected = false;

  constructor(private router: Router,private Service :ClasseService) { }
  ngOnInit(): void {
    this.classform = new FormGroup({
      nomclasse: new FormControl("", [Validators.required]),
    });
  }


  ajouter(){
    this.Service.adddclasse(this.classform.value).subscribe((res)=>{
      console.log(res)
      if(res){
        window.alert("Ajout Classe avec Succées")
        this.router.navigate(["gestion-classe"]);

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
