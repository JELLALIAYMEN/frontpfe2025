import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DepartementService } from 'src/app/services/departement.service';
import { SallesService } from 'src/app/services/salles.service';

@Component({
  selector: 'app-modifer-salle',
  templateUrl: './modifer-salle.component.html',
  styleUrls: ['./modifer-salle.component.scss']
})
export class ModiferSalleComponent implements OnInit{
  salleForm!: FormGroup;
  //departements: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModiferSalleComponent>,
    private salleService: SallesService,
    private departmentService: DepartementService,
    private fb: FormBuilder
  ) {
    // Initialiser le formulaire avec les données reçues
    this.salleForm = this.fb.group({
      nomdesalle: [data.nomdesalle, Validators.required], // Correspond à nomdesalle
      //departement: [data.departement.nom, Validators.required], // Correspond à departement.nom
    });
  }

  ngOnInit(): void {
    console.log("voici l'objet salle", this.data);
    //this.getAllDepartement(); // Charger les départements disponibles
  }

  /*getAllDepartement(): void {
    this.departmentService.getDepartements().subscribe({
      next: (response) => {
        this.departements = response;
        console.log('Départements récupérés:', this.departements);

        // Définir la valeur par défaut pour le champ departement après le chargement
        if (this.data.departement) {
          this.salleForm.get('departement')?.setValue(this.data.departement.nom);
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des départements', error);
      }
    });
  }*/

  saveChanges(): void {
    if (this.salleForm.valid) {
      const updatedSalle = this.salleForm.value;

      // Appeler le service pour mettre à jour la salle
      this.salleService.modifSalle(this.data.id, updatedSalle.nomdesalle).subscribe({
        next: () => {
          console.log('Salle mise à jour avec succès');
          this.dialogRef.close(updatedSalle); // Fermer la boîte de dialogue et retourner les données mises à jour
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour de la salle', error);
        },
      });
    } else {
      console.warn('Formulaire invalide');
    }
  }

  closeDialog(): void {
    this.dialogRef.close(); // Fermer la boîte de dialogue sans sauvegarder
  }
}