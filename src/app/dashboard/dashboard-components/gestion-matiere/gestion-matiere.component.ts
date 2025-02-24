import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatieresService } from 'src/app/services/matieres.service';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';

@Component({
  selector: 'app-gestion-matiere',
  templateUrl: './gestion-matiere.component.html',
  styleUrls: ['./gestion-matiere.component.scss']
})
export class GestionMatiereComponent {
  matieres: any[] = [];


  constructor(
    private matiereService: MatieresService,
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getAllMatieres();
  }


  getAllMatieres(): void {
    this.matiereService.allMatieres().subscribe({
      next: (response) => {
        this.matieres = response;
        console.log('Matieres récupérées:', response);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des matieres:', error);
      },
    });
  }
 openAddMatiere(){
    const dialogRef = this.dialog.open(AddMatiereComponent, {
      width: '600px' 
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Matiere ajouté!");
        window.location.reload();
      } else {
        console.log("Ajout annulée");
      }
    });
  }
}
