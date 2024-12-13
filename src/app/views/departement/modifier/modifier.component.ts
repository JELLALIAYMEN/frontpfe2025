import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../gestion-utilisateur/userservice';
import { DepartementService } from '../departement.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent {
    id: any;
    user: any = {}; // Votre modèle utilisateur (ajustez si nécessaire)
    departForm!: FormGroup;
    isEleveSelected = false;
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: DepartementService
    ) {}
  
    ngOnInit(): void {
      // Récupération de l'ID
      this.id = this.route.snapshot.params['id'];
  
      // Initialisation du formulaire avec des valeurs par défaut
      this.departForm = new FormGroup({
        nom: new FormControl('', [Validators.required]),
      });
  
      // Récupération des données utilisateur et mise à jour du formulaire
      if (this.id) {
        this.service.afficherbyid(this.id).subscribe((res) => {
          this.user = res;
  
          // Mise à jour des valeurs dans le formulaire
          this.departForm.patchValue({
            nom: this.user.nom
          });
        });
      }
    }
 
  
  
    modifier(){
      let d = {
        nom: this.departForm.value.nom,
        id:this.id
      }
      console.log(d)
      this.service.update(d).subscribe((res)=>{
          window.alert("Modification User avec Succées")
          this.router.navigate(["gestion-departement"]);
      })
    
    }
  
  

}
