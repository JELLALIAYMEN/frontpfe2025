import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'app-add-eleve',
  templateUrl: './add-eleve.component.html',
  styleUrls: ['./add-eleve.component.scss']
})
export class AddEleveComponent implements OnInit {
  userForm!: FormGroup;
  classes: any[] = [];

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<AddEleveComponent>,
    private classService: ClasseService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllClasses();
    this.userForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      login: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      profil: ['eleve', [Validators.required]],
      libelle: ['', [Validators.required]],
      nomclasse: ['', [Validators.required]],
      matricule: ['', [Validators.required]]

    });
  }

  getAllClasses() {
    this.classService.allClasses().subscribe({
      next: (response) => {
        this.classes = response;
        console.log('Classes récupérées:', this.classes);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des classes', error);
      }
    });
  }

  addUser() {
    if (this.userForm.invalid) {
      console.log('Formulaire invalide');
      return;
    }

    console.log('Formulaire:', this.userForm.value);

    const user = this.userForm.value;
    const nomclasse = this.userForm.get('nomclasse')?.value; 
    const matricule = this.userForm.get('matricule')?.value; 


    this.authService.addEleve(user, nomclasse, matricule).subscribe({
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

  // Accesseurs pour obtenir les contrôles des formulaires et les erreurs
  get nom() { return this.userForm.get('nom'); }
  get prenom() { return this.userForm.get('prenom'); }
  get login() { return this.userForm.get('login'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  get libelle() { return this.userForm.get('libelle'); }
  get profil() { return this.userForm.get('profil'); }
  get nomclasse() { return this.userForm.get('nomclasse'); }
  get matricule() { return this.userForm.get('matricule'); }

}
