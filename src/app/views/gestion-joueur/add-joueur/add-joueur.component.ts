import { Component } from '@angular/core';
import { UserService } from '../../gestion-utilisateur/userservice';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JoueurService } from '../joueur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.scss']
})
export class AddJoueurComponent {
  alluser :any ;
  joueurForm!: FormGroup;
  email :any;
  constructor(private service : UserService,private servicejoueur:JoueurService,private router: Router){}
  ngOnInit(){
    this.email=localStorage.getItem('email')
    this.joueurForm = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
      datenaissance: new FormControl("", [Validators.required]),
      telephone: new FormControl("", [Validators.required]),
      poste: new FormControl("", [Validators.required]),
      salaire: new FormControl("", [Validators.required]),
      email:new FormControl("", [Validators.required]),
      prime:new FormControl("", [Validators.required]),
      nlicence:new FormControl("", [Validators.required]),
      categorie:new FormControl("", [Validators.required]),

    });
    this.service.alluser().subscribe((res)=>{
      this.alluser=res;
    })
  }
  ajouter(){
  console.log(this.joueurForm.value)    
    this.servicejoueur.addjoueur(this.joueurForm.value,this.email).subscribe((res)=>{
      console.log(res)
      if(res){
    window.alert("Ajout Joueur avec Succées")
    this.router.navigate(["gestion-joueur"]);
  }
  else{
    window.alert("N° Licnece deja existe ")

  }
  },
  (error) => {
    window.alert("Vérifier les cordonnées")
  })
   }
}
