import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatieresService } from 'src/app/services/matieres.service';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.scss']
})
export class AddMatiereComponent implements OnInit{

  matiereForm!: FormGroup;

    constructor(
      private matiereService: MatieresService,
      private fb: FormBuilder,
      private snackBar: MatSnackBar,
      private dialogRef: MatDialogRef<AddMatiereComponent>,
    ) {}
  ngOnInit(): void {
    this.matiereForm = this.fb.group({
      nom: ['', [Validators.required]],
      coefficient: ['', [Validators.required]], // Contient le nom du département
    });
  }
  // Ajouter une salle
  ajouteMatiere(): void {
    if (this.matiereForm.valid) {
      const matiereData = {
        nom: this.matiereForm.value.nom,
        coefficient: this.matiereForm.value.coefficient
      };
  
      this.matiereService.addMatiere(matiereData).subscribe({
        next: (response) => {
          console.log('Matière ajoutée avec succès:', response);
          // Afficher une alerte de succès
          this.snackBar.open('Matière ajoutée avec succès!', 'Fermer', {
            duration: 3000, // Durée d'affichage en millisecondes
            panelClass: ['snackbar-success'] // Ajouter une classe pour personnaliser l'alerte
          });
          this.dialogRef.close('matiere ajouté');

        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de la matière:', error);
          // Afficher une alerte d'échec
          this.snackBar.open('Erreur lors de l\'ajout de la matière. Veuillez réessayer.', 'Fermer', {
            duration: 3000, // Durée d'affichage en millisecondes
            panelClass: ['snackbar-error'] // Ajouter une classe pour personnaliser l'alerte
          });
        },
      });
    }
  }
  
}
