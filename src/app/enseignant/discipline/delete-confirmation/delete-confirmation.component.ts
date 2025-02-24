import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DisciplineService } from 'src/app/services/discipline.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {
disciplineId: any;

  constructor(
    private dialogRef: MatDialogRef<DeleteConfirmationComponent>,
    private disicplineService: DisciplineService,
    @Inject(MAT_DIALOG_DATA) public data: any // Injecter les données passées au dialog
  ) {
    // Initialiser userId avec l'ID reçu
    this.disciplineId = this.data.id;
  }

  confirmerSuppression(): void {
    if (this.disciplineId) {
      this.disicplineService.deleteDiscipline(this.disciplineId).subscribe({
        next: (response) => {
          console.log("Discipline supprimée avec succès!");
          this.dialogRef.close(true); // Close the dialog with 'true' to signal deletion
        },
        error: (err) => {
          console.error('Erreur lors de la suppression de disciline :', err);
          this.dialogRef.close(false); // Close with 'false' on error
        }
      });
    }
  }


  // Méthode pour annuler la suppression
  annulerSuppression(): void {
    this.dialogRef.close(false); // Fermer la boîte de dialogue sans suppression
  }
}
