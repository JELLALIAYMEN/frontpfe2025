import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatiereService } from '../matiere.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modif-matiere',
  templateUrl: './modif-matiere.component.html',
  styleUrls: ['./modif-matiere.component.scss']
})
export class ModifMatiereComponent {
  id: any;
  user: any = {}; // Votre modèle utilisateur (ajustez si nécessaire)
  matForm!: FormGroup;
  isEleveSelected = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MatiereService
  ) {}

  ngOnInit(): void {
    // Récupération de l'ID
    this.id = this.route.snapshot.params['id'];

    // Initialisation du formulaire avec des valeurs par défaut
    this.matForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      coefficient: new FormControl('', [Validators.required]),

    });

    // Récupération des données utilisateur et mise à jour du formulaire
    if (this.id) {
      this.service.afficherbyid(this.id).subscribe((res) => {
        this.user = res;

        // Mise à jour des valeurs dans le formulaire
        this.matForm.patchValue({
          nom: this.user.nom,
          coefficient:this.user.coefficient
        });
      });
    }
  }



  modifier(){
    let d = {
      nom: this.matForm.value.nom,
      coefficient: this.matForm.value.coefficient,id:this.id
    }
    this.service.update(d).subscribe((res)=>{
        window.alert("Modification Matiére avec Succées")
        this.router.navigate(["gestion-matiere"]);
    })
  
  }}