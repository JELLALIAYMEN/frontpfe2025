import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClasseService } from 'src/app/services/classe.service';
import { CoursService } from 'src/app/services/cours.service';
import { MatieresService } from 'src/app/services/matieres.service';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.scss']
})
export class AddCoursComponent {
  courseForm!: FormGroup;
  classes: { id: number, nomclasse: string }[] = []; // Typage explicite des classes
  file!: File;
  matieres: any[] = [];

  constructor(
    private courseService: CoursService,
    private classService: ClasseService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddCoursComponent>,
    private matiereService: MatieresService

  ) {}

  ngOnInit(): void {
    this.getAllClasses();
    this.initializeForm();
    this.getAllMatieres();
  }

  // Initialisation du formulaire
  initializeForm() {
    this.courseForm = this.fb.group({
      nomcour: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nomclasse: ['', [Validators.required]],
      fichier: [null, [Validators.required]],
      nomMatiere: ['', [Validators.required]],

    });

    // Set email field automatically from localStorage
    const email = localStorage.getItem('email');
    if (email) {
      this.courseForm.patchValue({ email });
    }
  }
  getAllMatieres(): void {
    this.matiereService.allMatieres().subscribe({
      next: (response) => {
        this.matieres = response;
        console.log('Matieres récupérées:', response);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des matieres:', error);
      },
    });
  }
  // Récupération de toutes les classes
  getAllClasses() {
    this.classService.allClasses().subscribe({
      next: (response: { id: number, nomclasse: string }[]) => {
        this.classes = response;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des classes', error);
      }
    });
  }

  // Gestion du fichier sélectionné
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.file = file; // Stockage dans la variable locale
      this.courseForm.patchValue({
        fichier: file
      });
    }
  }

  // Ajout du cours
  addCourse() {
    if (this.courseForm.invalid) {
      console.error('Formulaire invalide', this.courseForm.errors);
      return;
    }

    const formData = new FormData();
    formData.append('fichier', this.courseForm.get('fichier')?.value); // Utilisation correcte du fichier
    formData.append('nomcour', this.courseForm.get('nomcour')?.value);
    formData.append('email', this.courseForm.get('email')?.value);
    formData.append('nomclasse', this.courseForm.get('nomclasse')?.value);
    formData.append('nomMatiere', this.courseForm.get('nomMatiere')?.value);

    this.courseService.addCourse(formData).subscribe({
      next: (response) => {
        console.log('Cours ajouté avec succès', response);
        this.dialogRef.close('cours ajouté ajouté');
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout du cours', error);
      }
    });
  }

  // Annuler (à implémenter si nécessaire)
  cancel() {
    console.log('Action annulée');
    // Ajouter une logique si un dialog est utilisé ou une navigation
  }

  // Accesseurs pour les erreurs et validations
  get nomcour() { return this.courseForm.get('nomcour'); }
  get email() { return this.courseForm.get('email'); }
  get nomclasse() { return this.courseForm.get('nomclasse'); }
  get fichier() { return this.courseForm.get('fichier'); }
  get nomMatiere() { return this.courseForm.get('nomMatiere'); }

}
