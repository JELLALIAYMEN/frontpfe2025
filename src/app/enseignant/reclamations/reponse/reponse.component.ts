import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ReponseComponent {
  reponse: string = ''; // Stocke la réponse de l'utilisateur
  isLoading: boolean = false; // Indique si une requête est en cours

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number; destinataire: { email: string } },
    private reclamationService: ReclamationService,
    private dialogRef: MatDialogRef<ReponseComponent>,
    private snackBar: MatSnackBar
  ) {}

  /**
   * Valide et envoie la réponse
   */
  repondre(): void {

    this.isLoading = true; // Affiche un indicateur de chargement
    const { id, destinataire } = this.data;

    this.reclamationService.repondreReclamation(id, destinataire.email, this.reponse).subscribe(
      () => {
        this.snackBar.open('Réponse envoyée avec succès.', 'Fermer', {
          duration: 3000,
          panelClass: ['snackbar-success'],
        });
        this.dialogRef.close(true); // Renvoie un indicateur de succès au composant parent
      },
      (error) => {
        console.error('Erreur lors de l\'envoi de la réponse :', error);
        this.dialogRef.close(true); // Renvoie un indicateur de succès au composant parent
      }
    ).add(() => {
      this.isLoading = false; // Arrête l'indicateur de chargement après la réponse
    });
  }
}
