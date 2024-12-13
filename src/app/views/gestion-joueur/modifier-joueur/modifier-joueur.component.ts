import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../gestion-utilisateur/userservice';
import { JoueurService } from '../joueur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-joueur',
  templateUrl: './modifier-joueur.component.html',
  styleUrls: ['./modifier-joueur.component.scss']
})
export class ModifierJoueurComponent {
  alluser :any ;
  joueurForm!: FormGroup;
  email :any;
  id:any ;
  joueur:any ;
  constructor(private route :ActivatedRoute, private service : UserService,private servicejoueur:JoueurService,private router: Router){}
  ngOnInit(){
    this.id = this.route.snapshot.params["id"];

    this.servicejoueur.joueur(this.id).subscribe((res)=>{
this.joueur=res ; 
console.log(this.joueur)
    })
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
    let joueur={
      nom:this.joueurForm.value.nom,
      prenom: this.joueurForm.value.prenom,
      datenaissance:this.joueurForm.value.datenaissance,
      telephone:this.joueurForm.value.telephone,
      poste:this.joueurForm.value.poste,
      salaire:this.joueurForm.value.salaire,
      email:this.joueurForm.value.email,
      prime:this.joueurForm.value.prime,
      nlicence:this.joueurForm.value.nlicence,
      categorie:this.joueurForm.value.categorie,
      id:this.id,

    }
  console.log(this.joueurForm.value)    
    this.servicejoueur.updatejoueur(joueur,this.email).subscribe((res)=>{
      console.log(res)
      if(res){
    window.alert("Modifier Joueur avec Succées")
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
