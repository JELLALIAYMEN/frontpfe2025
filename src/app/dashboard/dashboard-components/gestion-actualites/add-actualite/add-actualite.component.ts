import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActualiesService } from 'src/app/services/actualies.service';

@Component({
  selector: 'app-add-actualite',
  templateUrl: './add-actualite.component.html',
  styleUrls: ['./add-actualite.component.scss']
})
export class AddActualiteComponent {
  titre: string = '';
  description: string = '';
  cible: string = 'ELEVE';
  video: File | null = null;
  fichier: File | null = null;
  isLoading: boolean = false;  // Variable pour contrôler l'affichage du loader

    constructor(private actualiteService: ActualiesService,
      private dialogRef: MatDialogRef<AddActualiteComponent>
    ) {}
  

   // Soumettre une nouvelle actualité
   onSubmit(): void {
    this.isLoading = true;  // Active le loader

    const actualite = { titre: this.titre, description: this.description, cible: this.cible };

    this.actualiteService.createActualite(actualite, this.video, this.fichier).subscribe({
      next: (response) => {
        console.log('Actualité créée avec succès', response);
        this.isLoading = false;
        alert('Actualité publiée avec succès !');
        this.resetForm();
      },
      error: (error) => {
        console.error('Erreur lors de la création de l\'actualité', error);
        this.isLoading = false;
        alert('Une erreur est survenue.');
      },
    });
  }
 // Gérer le changement de vidéo
 onVideoChange(event: any): void {
  this.video = event.target.files[0];
}

// Gérer le changement de fichier
onFichierChange(event: any): void {
  this.fichier = event.target.files[0];
}

// Gérer le glisser-déposer des fichiers
handleDrop(event: DragEvent, type: string): void {
  event.preventDefault();
  const file = event.dataTransfer?.files[0];
  if (file) {
    if (type === 'video') this.video = file;
    if (type === 'file') this.fichier = file;
  }
}

// Gérer le survol lors du glisser-déposer
handleDragOver(event: DragEvent): void {
  event.preventDefault();
}

// Ouvrir la boîte de dialogue pour sélectionner un fichier
openFileDialog(inputType: string): void {
  const input = document.getElementById(inputType) as HTMLInputElement;
  if (input) input.click();
}

// Réinitialiser le formulaire
resetForm(): void {
  this.titre = '';
  this.description = '';
  this.cible = 'ELEVE';
  this.video = null;
  this.fichier = null;
}
closeDialog(): void {
  this.dialogRef.close();  // Fermer le dialog sans publier
}
}
