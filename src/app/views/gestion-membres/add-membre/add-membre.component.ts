import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MembreService } from '../membre.service';

@Component({
  selector: 'app-add-membre',
  templateUrl: './add-membre.component.html',
  styleUrls: ['./add-membre.component.scss']
})
export class AddMembreComponent {
  membreForm!: FormGroup;
  constructor(private router: Router,private Service :MembreService) { }
  ngOnInit(): void {
    this.membreForm = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      adresse: new FormControl("", [Validators.required]),
      codepostale: new FormControl("", [Validators.required]),
      datedenaissance: new FormControl("", [Validators.required]),
      poste: new FormControl("", [Validators.required, Validators.email]),
      type: new FormControl("", [Validators.required]),
      ville :new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      tel: new FormControl("", [Validators.required]),
    });
  }
  ajouter(){
this.Service.addmembre(this.membreForm.value).subscribe((res)=>{
  if(res){
    window.alert("Ajout Membre avec Succées")
    this.router.navigate(["gestion-membre"]);
  }
  else{
   
  }
  },
  (error) => {
    window.alert("L'email existe deja")
  }
  ) }
}
