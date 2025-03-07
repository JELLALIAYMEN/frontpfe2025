import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModuleService } from 'src/app/services/ModuleService';
 // Assurez-vous d'importer le bon service

@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.component.html',
  styleUrls: ['./detail-module.component.scss']
})
export class DetailModuleComponent {
  modules: any[] = []; // Stocke tous les modules

  constructor(
    public dialogRef: MatDialogRef<DetailModuleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private moduleService: ModuleService
  ) {
    this.getAllModules(); // Charger tous les modules dès l'ouverture du dialogue
  }

  // Récupérer tous les modules
  getAllModules() {
    this.moduleService.getAllModules().subscribe(
      (response: any) => {
        this.modules = response;
      },
      (error) => {
        console.error('Erreur lors du chargement des modules', error);
      }
    );
  }

  // Fermer la boîte de dialogue
  close(): void {
    this.dialogRef.close();
  }
}
