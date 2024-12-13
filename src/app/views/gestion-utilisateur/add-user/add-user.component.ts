import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../userservice';
import { ClasseService } from '../../gestion-classe/classe.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  userForm!: FormGroup;
  isEleveSelected = false;
  isEleveSelected2 = false;
  allclasse:any ;

  constructor(private router: Router,private Service :UserService,private classeservice :ClasseService) { }
  ngOnInit(): void {
    this.userForm = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
      login: new FormControl("", [Validators.required]),
      profil: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      libelle: new FormControl("", [Validators.required]),
      nomclasse: new FormControl("", [Validators.required]),
    });

        this.classeservice.allclasse().subscribe((res)=>{
    this.allclasse=res ;
    })
  }


  onProfilChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    
    this.isEleveSelected = selectedValue === 'Teacher';
    this.isEleveSelected2 = selectedValue === 'Eleve';

  }


  ajouter(){
    if(this.isEleveSelected){
   this.Service.adduser(this.userForm.value).subscribe((res)=>{
      if(res){
        window.alert("Ajout User avec Succées")
        this.router.navigate(["gestion-utilisateur"]);
      }
      else{
       
      }
      },
      (error) => {
        window.alert("L'email existe deja")
      }
      )
  
  }
  else if(this.isEleveSelected2){
    this.Service.addEleve(this.userForm.value,this.userForm.value.nomclasse).subscribe((res)=>{
      if(res){
        window.alert("Ajout User avec Succées")
        this.router.navigate(["gestion-utilisateur"]);
      }
      else{
       
      }
      },
      (error) => {
        window.alert("L'email existe deja")
      }
      )
  
  }
  else{
    this.Service.adduser(this.userForm.value).subscribe((res)=>{
      if(res){
        window.alert("Ajout User avec Succées")
        this.router.navigate(["gestion-utilisateur"]);
      }
      else{
       
      }
      },
      (error) => {
        window.alert("L'email existe deja")
      }
      )
  
  }
}

}
