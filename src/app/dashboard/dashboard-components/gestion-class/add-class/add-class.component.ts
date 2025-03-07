import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';
import { MatieresService } from 'src/app/services/matieres.service';
import { SousclassService } from 'src/app/services/sous-classe-service.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {
  classeForm!: FormGroup;
  sousClasses: any[] = [];
  matieres: any[] = [];

  constructor(
    private fb: FormBuilder,
    private classService: ClasseService,
    private sousClasseService: SousclassService,
    private matiereService: MatieresService
  ) {}

  ngOnInit(): void {
    this.classeForm = this.fb.group({
      nomclasse: ['', Validators.required],
        nomssousclasse: ['', Validators.required], // La valeur ici correspond à l'ID de la sous-classe
      matiere: ['', Validators.required],
      matricule: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]], // 8 chiffres exactement
    });

    // Récupérer les sous-classes
    this.sousClasseService.getSousClasses().subscribe(
      (data: any) => this.sousClasses= data,
      (error) => console.error('Erreur lors de la récupération des sous-classes:', error)
    );

    // Récupérer les matières
    this.matiereService.allMatieres().subscribe(
      (data: any) => this.matieres = data,
      (error) => console.error('Erreur lors de la récupération des matières:', error)
    );
  }

  // Ajouter la méthode onSubmit()
  onSubmit(): void {
    if (this.classeForm.valid) {
      console.log('Formulaire soumis:', this.classeForm.value);
      // Appel à un service pour ajouter la classe
      this.classService.addClass(this.classeForm.value).subscribe(
        (response) => {
          console.log('Classe ajoutée avec succès:', response);
          // Réinitialisation ou redirection après le succès
          this.classeForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la classe:', error);
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }
}
