import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClasseService } from 'src/app/services/classe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modifier-parent',
  templateUrl: './modifier-parent.component.html',
  styleUrls: ['./modifier-parent.component.scss']
})
export class ModifierParentComponent{
    parentForm: FormGroup; 
    classes: any[] = []; 
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private dialogRef: MatDialogRef<ModifierParentComponent>,
      private classService: ClasseService,
      private userService: UserService,
      private fb: FormBuilder
    ) {
      // Initialiser le formulaire avec les données reçues
      this.parentForm = this.fb.group({
        nom: [data.nom, Validators.required],
        prenom: [data.prenom, Validators.required],
        login: [data.login, Validators.required],
        email: [data.email, [Validators.required, Validators.email]],
        libelle: [data.libelle, Validators.required],
      });
    }

    saveChanges(): void {
      if (this.parentForm.valid) {
        const updatedEleve = this.parentForm.value;
  
        // Appel au service pour mettre à jour l'utilisateur
        this.userService.updateUser(updatedEleve,this.data.id).subscribe({
          next: () => {
            console.log('Utilisateur mis à jour avec succès');
            this.dialogRef.close(updatedEleve); // Fermer la boîte de dialogue et retourner les données
          },
          error: (error) => {
            console.error('Erreur lors de la mise à jour de l’utilisateur', error);
          },
        });
      } else {
        console.warn('Formulaire invalide');
      }
    }
  
    closeDialog(): void {
      this.dialogRef.close(); // Fermer la boîte de dialogue sans sauvegarder
    }
}
  