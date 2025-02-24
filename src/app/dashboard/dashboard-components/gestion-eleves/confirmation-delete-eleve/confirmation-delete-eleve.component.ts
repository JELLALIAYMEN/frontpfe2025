import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationSuppressionComponent } from '../../gestion-enseignants/confirmation-suppression/confirmation-suppression.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-confirmation-delete-eleve',
  templateUrl: './confirmation-delete-eleve.component.html',
  styleUrls: ['./confirmation-delete-eleve.component.scss']
})
export class ConfirmationDeleteEleveComponent{
  userId: any;

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDeleteEleveComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any // Injecter les données passées au dialog
  ) {
    // Initialiser userId avec l'ID reçu
    this.userId = this.data.id;
  }

  confirmerSuppression(): void {
    if (this.userId) {
      this.userService.deleteUser(this.userId).subscribe({
        next: (response) => {
          console.log("Utilisateur supprimé avec succès!");
          this.dialogRef.close(true); // Close the dialog with 'true' to signal deletion
        },
        error: (err) => {
          console.error('Erreur lors de la suppression de l\'utilisateur :', err);
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
