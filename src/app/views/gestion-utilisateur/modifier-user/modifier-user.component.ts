import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../userservice';
import { ClasseService } from '../../gestion-classe/classe.service';

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.scss']
})
export class ModifierUserComponent {
  id: string | null = null;
  user: any = {}; // Votre modèle utilisateur (ajustez si nécessaire)
  userForm!: FormGroup;
  isEleveSelected = false;
  allclasse:any ;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,private classeservice :ClasseService
    
  ) {}

  ngOnInit(): void {
      // Récupération de l'ID
      this.id = this.route.snapshot.params['id'];
    
      // Initialisation du formulaire avec des valeurs par défaut
      this.userForm = new FormGroup({
        nom: new FormControl('', [Validators.required]),
        prenom: new FormControl('', [Validators.required]),
        login: new FormControl('', [Validators.required]),
        libelle: new FormControl('', [Validators.required]),
        profil: new FormControl('', [Validators.required]),
        nomclasse: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
      });
    
      // Mise à jour de isEleveSelected selon la valeur initiale du profil
      this.isEleveSelected = this.userForm.get('profil')?.value === 'Eleve';
    
      // Récupération de toutes les classes
      this.classeservice.allclasse().subscribe((res) => {
        this.allclasse = res;
      });
    
      // Récupération des données utilisateur et mise à jour du formulaire
      if (this.id) {
        this.service.userbyid(this.id).subscribe((res) => {
          this.user = res;
    
          // Mise à jour des valeurs dans le formulaire
          this.userForm.patchValue({
            nom: this.user.nom,
            prenom: this.user.prenom,
            login: this.user.login,
            profil: this.user.profil,
            email: this.user.email,
            nomclasse: this.user.classe.nomclasse
          });
    
          // Synchroniser isEleveSelected avec les données utilisateur
          this.isEleveSelected = this.user.profil === 'Eleve';
        });
      }
    }
    
    // Méthode déclenchée lorsque le profil change
    onProfilChange(event: Event): void {
      const selectElement = event.target as HTMLSelectElement;
      const selectedValue = selectElement.value;
    
      // Mettre à jour isEleveSelected en fonction de la sélection
      this.isEleveSelected = selectedValue === 'Eleve';
    
      // Si le profil n'est pas "Eleve", réinitialiser le champ nomclasse
      if (!this.isEleveSelected) {
        this.userForm.patchValue({ nomclasse: '' });
      }
    }
    
  modifier(){
    let user = {
      nom: this.userForm.value.nom,
      prenom: this.userForm.value.prenom,
      login: this.userForm.value.login,
      profil: this.userForm.value.profil,
      email: this.userForm.value.email, 
      id:this.id
    }
    console.log(this.userForm.value.profil=='Eleve')
    if(this.userForm.value.profil=='Eleve'){
      this.service.modifierEleve(user,this.userForm.value.nomclasse).subscribe((res)=>{
        console.log(res)
          window.alert("Modification User avec Succées")
          this.router.navigate(["gestion-utilisateur"]);
      })
    
    }
    else {
    console.log(user)
    this.service.modifieruser(user).subscribe((res)=>{
      console.log(res)
        window.alert("Modification User avec Succées")
        this.router.navigate(["gestion-utilisateur"]);
    })
  }
  }

}
