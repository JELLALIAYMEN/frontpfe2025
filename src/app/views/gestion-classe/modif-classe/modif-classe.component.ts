import { Component } from '@angular/core';
import { ClasseService } from '../classe.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modif-classe',
  templateUrl: './modif-classe.component.html',
  styleUrls: ['./modif-classe.component.scss']
})
export class ModifClasseComponent {
  id: any;
  user: any = {}; // Votre modèle utilisateur (ajustez si nécessaire)
  classform!: FormGroup;
  isEleveSelected = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ClasseService
  ) {}

  ngOnInit(): void {
    // Récupération de l'ID
    this.id = this.route.snapshot.params['id'];

    // Initialisation du formulaire avec des valeurs par défaut
    this.classform = new FormGroup({
      nomclasse: new FormControl('', [Validators.required]),
    });

    // Récupération des données utilisateur et mise à jour du formulaire
    if (this.id) {
      this.service.afficherbyid(this.id).subscribe((res) => {
        this.user = res;

        // Mise à jour des valeurs dans le formulaire
        this.classform.patchValue({
          nomclasse: this.user.nomclasse
        });
      });
    }
  }



  modifier(){
    let d = {
      nomclasse: this.classform.value.nomclasse,
      id:this.id
    }
    console.log(d)
    this.service.update(d).subscribe((res)=>{
        window.alert("Modification User avec Succées")
        this.router.navigate(["gestion-classe"]);
    })
  
  }




}
