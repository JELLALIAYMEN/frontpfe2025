import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service'; // Assurez-vous que ce chemin est correct
import { MatDialogRef } from '@angular/material/dialog';
///import any = jasmine.any;

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.scss']
})
export class AddEnseignantComponent implements OnInit {
  userForm!: FormGroup;
  profils=["Teacher","autre","surveillant"]
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
      alert('Veuillez remplir correctement le formulaire.');
      return;
    }

    const user = this.userForm.value;
    this.authService.addUser(user).subscribe({
      next: (response) => {
        console.log("Réponse du serveur:", response);
        alert(response.message);  // Utilise response.message au lieu de response directement
      },
      error: (error) => {
        console.error("Erreur lors de l'ajout:", error);
        alert(error.error.message || "Une erreur est survenue");
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

