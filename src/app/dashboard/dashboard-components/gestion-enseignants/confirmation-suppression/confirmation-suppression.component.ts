import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-confirmation-suppression',
  templateUrl: './confirmation-suppression.component.html',
  styleUrls: ['./confirmation-suppression.component.scss']
})
export class ConfirmationSuppressionComponent {
  userId: any;

  constructor(
    private dialogRef: MatDialogRef<ConfirmationSuppressionComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any // Injecter les données passées au dialog
  ) {
    this.userId = this.data.id;
  }

  confirmerSuppression(): void {
    if (this.userId) {
      this.userService.deleteUser(this.userId).subscribe({
        next: (response) => {
          console.log("Enseignant supprimé avec succès!");
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
