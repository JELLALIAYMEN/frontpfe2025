import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-confirmation-delete-parent',
  templateUrl: './confirmation-delete-parent.component.html',
  styleUrls: ['./confirmation-delete-parent.component.scss']
})
export class ConfirmationDeleteParentComponent {
  userId: any;

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDeleteParentComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any // Injecter les données passées au dialog
  ) {
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
