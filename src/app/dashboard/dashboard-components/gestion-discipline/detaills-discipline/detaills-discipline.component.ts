import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DisciplineService } from 'src/app/services/discipline.service';

@Component({
  selector: 'app-detaills-discipline',
  templateUrl: './detaills-discipline.component.html',
  styleUrls: ['./detaills-discipline.component.scss']
})
export class DetaillsDisciplineComponent {
  status: string = ''; // Propriété pour le statut
  response: string = ''; // Propriété pour la réponse

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DetaillsDisciplineComponent>,
    private disciplineService: DisciplineService // Injection du service
  ) {}

  submit() {
    console.log('Valeurs soumises:', this.status, this.response);

    // Confirmer avant de soumettre
    const confirmation = window.confirm('Êtes-vous sûr d\'envoyer cette réponse ?');
    if (confirmation) {
      this.disciplineService.validerOuRefuser(this.data.id, this.status, this.response).subscribe(
        () => {
          console.log(`Réponse envoyée pour ${this.data.eleve.nom}`);
          this.dialogRef.close({ success: true });
        },
        (error) => {
          console.error('Erreur lors de l\'envoi de la réponse', error);
          this.dialogRef.close({ success: false });
        }
      );
    }
  }
}
