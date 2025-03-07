import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {SallesService} from "../../../../services/salles.service";

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.scss']
})
export class AddSalleComponent implements OnInit  {
  salleForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private salleService: SallesService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.salleForm = this.fb.group({
      nomdesalle: ['', [Validators.required]],
      salleType: ['', [Validators.required]]
    });
  }

  ajouterSalle(): void {
    if (this.salleForm.valid) {
      const salleData = {
        nomdesalle: this.salleForm.value.nomdesalle
      };
      const salleType = this.salleForm.value.salleType;

      this.salleService.ajoutSalle(salleData, salleType).subscribe({
        next: (response) => {
          this.snackBar.open('Salle ajoutée avec succès !', 'Fermer', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.salleForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de la salle:', error);
          this.snackBar.open('Erreur lors de l\'ajout de la salle', 'Fermer', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }
}
