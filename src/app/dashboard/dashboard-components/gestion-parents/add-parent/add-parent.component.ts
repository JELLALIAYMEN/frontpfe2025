import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrls: ['./add-parent.component.scss']
})
export class AddParentComponent  implements OnInit{
  userForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<AddParentComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      login: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      profil: ['parent', [Validators.required]],
      libelle: ['', [Validators.required]],
    });

    console.log('Formulaire initialisé');
  }

  addUser() {
    if (this.userForm.invalid) {
      console.log('Formulaire invalide');
      return;
    }

    const user = this.userForm.value;
    console.log('Données du formulaire envoyées :', user);

    this.authService.addUser(user).subscribe({
      next: (response) => {
        console.log('Utilisateur ajouté avec succès', response);
        this.dialogRef.close('Utilisateur ajouté');
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
      }
    });
  }

  cancel() {
    this.dialogRef.close('Annulé');
  }

  // Accesseurs pour éviter les erreurs de typage dans le HTML
  get nom() { return this.userForm.get('nom'); }
  get prenom() { return this.userForm.get('prenom'); }
  get login() { return this.userForm.get('login'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  get libelle() { return this.userForm.get('libelle'); }
  get profil() { return this.userForm.get('profil'); }
}
