import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.scss']
})
export class AddEnseignantComponent implements OnInit{
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialogRef: MatDialogRef<AddEnseignantComponent>
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      login: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      profil: ['enseignant', [Validators.required]],
      libelle: ['', [Validators.required]]
    });
  }

  addUser() {
    if (this.userForm.invalid) {
      console.log('Formulaire invalide', this.userForm.value);
      return;
    }

    const user = this.userForm.value;

    // Appel à l'API via AuthService
    this.authService.addUser(user).subscribe({
      next: (response) => {
        console.log('Utilisateur ajouté avec succès :', response);
        this.dialogRef.close('Utilisateur ajouté avec succès');
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
      }
    });
  }

  cancel() {
    this.dialogRef.close('Ajout annulé');
  }

  // Accesseurs pour les contrôles du formulaire
  get nom() { return this.userForm.get('nom'); }
  get prenom() { return this.userForm.get('prenom'); }
  get login() { return this.userForm.get('login'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  get profil() { return this.userForm.get('profil'); }
  get libelle() { return this.userForm.get('libelle'); }
}
