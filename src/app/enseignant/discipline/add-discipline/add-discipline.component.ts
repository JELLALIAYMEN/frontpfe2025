import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DisciplineService } from 'src/app/services/discipline.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-discipline',
  templateUrl: './add-discipline.component.html',
  styleUrls: ['./add-discipline.component.scss']
})
export class AddDisciplineComponent implements OnInit {
  disciplineForm!: FormGroup;
  eleves: any[] = [];
  file!: File;
  email: string | null = localStorage.getItem('email');
  enseignant: any;

  constructor(
    private fb: FormBuilder,
    private disciplineService: DisciplineService,
    private dialogRef: MatDialogRef<AddDisciplineComponent>,
    private userService: UserService,
    private snackBar:MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadEnseignant();
    this.loadEleves();
  }

  loadEnseignant(): void {
    if (this.email) {
      this.userService.userbyemail(this.email).subscribe({
        next: (response) => {
          this.enseignant = response;
          this.initForm();
        },
        error: (error) => {
          console.error('Erreur lors de la récupération de l\'enseignant:', error);
        }
      });
    }
  }

  initForm(): void {
    this.disciplineForm = this.fb.group({
      cause: ['', Validators.required],
      file: [null],
      eleveId: ['', Validators.required],
      enseignantId: [this.enseignant.id, Validators.required] // Champ masqué avec valeur fixée
    });
  }

  loadEleves(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.eleves = data.filter((user: any) => user.profil === 'eleve');
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des élèves:', err);
      }
    });
  }

  ajouterDiscipline(): void {
    const formValues = this.disciplineForm.value;

    this.disciplineService.ajouterDiscipline(
      formValues.file,
      formValues.cause,
      formValues.eleveId,
      formValues.enseignantId
    ).subscribe({
      next: (response) => {
        console.log('Discipline ajoutée avec succès', response);

        // Afficher le Snackbar de succès
        this.snackBar.open('Discipline ajoutée avec succès !', 'Fermer', {
          duration: 3000, // 3 secondes
          verticalPosition: 'top', // Position en haut
          horizontalPosition: 'right', // Position à droite
        });

        this.dialogRef.close();
        window.location.reload();

      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout de la discipline', error);
      }
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
      this.disciplineForm.patchValue({ file: file });
      this.disciplineForm.get('file')?.updateValueAndValidity();
    }
  }
}