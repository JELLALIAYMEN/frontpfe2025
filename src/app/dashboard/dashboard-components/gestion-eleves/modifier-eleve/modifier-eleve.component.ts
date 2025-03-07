import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClasseService } from 'src/app/services/classe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modifier-eleve',
  templateUrl: './modifier-eleve.component.html',
  styleUrls: ['./modifier-eleve.component.scss']
})
export class ModifierEleveComponent implements OnInit{
  eleveForm: FormGroup; // Utilisation d'un formulaire réactif
  classes: any[] = []; // Liste des classes disponibles

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModifierEleveComponent>,
    private classService: ClasseService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // Initialiser le formulaire avec les données reçues
    this.eleveForm = this.fb.group({
      nom: [data.nom, Validators.required],
      prenom: [data.prenom, Validators.required],
      login: [data.login, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      libelle: [data.libelle, Validators.required],
      classe: [data.classe?.id || '', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log("voici l'objet eleve", this.data);
    this.getAllClasses(); // Charger les classes disponibles
  }

  getAllClasses(): void {
    this.classService.allClasses().subscribe({
      next: (response) => {
        this.classes = response;
        console.log('Classes récupérées:', this.classes);

        // Définir la valeur par défaut après le chargement des classes
        if (this.data.classe) {
          this.eleveForm.get('classe')?.setValue(this.data.classe.id);
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des classes', error);
      }
    });
  }

  saveChanges(): void {
    if (this.eleveForm.valid) {
      const updatedEleve = this.eleveForm.value;

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
