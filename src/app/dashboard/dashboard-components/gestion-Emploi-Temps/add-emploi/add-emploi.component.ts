import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClasseService } from 'src/app/services/classe.service';
import { EmploiDuTempsService } from 'src/app/services/emploi-du-temps.service';
import { MatieresService } from 'src/app/services/matieres.service';
import { SallesService } from 'src/app/services/salles.service';

@Component({
  selector: 'app-add-emploi',
  templateUrl: './add-emploi.component.html',
  styleUrls: ['./add-emploi.component.scss']
})
export class AddEmploiComponent {
  emploiForm!: FormGroup;
  classes: any[] = [];
  joursDeLaSemaine: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  matieres: any[] = [];
  salles: any[] = [];
  constructor(
    private emploiService: EmploiDuTempsService,
    private fb: FormBuilder,
    private classService: ClasseService,
    private dialogRef: MatDialogRef<AddEmploiComponent>,
    private salleService: SallesService,
    private matiereService: MatieresService
    
  ) {}

  ngOnInit(): void {
    this.getAllClasses();
    this.getAllSalles();
    this.getAllMatieres();
    this.emploiForm = this.fb.group({
      date: ['', Validators.required],
      nomjour: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salle: ['', Validators.required],
      matiere: ['', Validators.required],
      classe: ['', Validators.required],
      heure: ['', Validators.required],
      parqueinzeine: [''],
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

  ajouterCalendrier(): void {
    if (this.emploiForm.valid) {
      const formValues = this.emploiForm.value;

      // Préparer l'objet Emploidetemps à envoyer
      const emploi: any = {
        date: formValues.date,
        nomjour: formValues.nomjour,
        heure: formValues.heure,
        parqueinzeine: formValues.parqueinzeine
      };

      // Appel au service pour créer l'emploi
      this.emploiService.creerEmploi(
        emploi,  
        formValues.email,  
        formValues.salle,  
        formValues.matiere,  
        formValues.classe  
      ).subscribe({
        next: (response) => {
          switch (response) {
            case 'cette classe a une devoir':
              alert('Erreur : Cette classe a déjà un devoir programmé pour cette période.');
              break;
            case 'ce professeur a un devoir cette periode':
              alert('Erreur : Ce professeur a déjà un devoir programmé pour cette période.');
              break;
            case "salle n'est pas dispo":
              alert("Erreur : La salle sélectionnée n'est pas disponible pour cette période.");
              break;
            case 'true':
              alert('Emploi ajouté avec succès!');
              this.dialogRef.close('Ajouté');
              break;
            default:
              alert('Une erreur inconnue est survenue.');
              break;
          }
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout d\'une séance dans l\'emploi du temps :', error);
          alert('Une erreur est survenue lors de l\'ajout d\'une séance dans l\'emploi du temps .');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs du formulaire correctement.');
    }
  }

  cancel() {
    this.dialogRef.close('Annulé');
  }
  getAllSalles(): void {
    this.salleService.afficherSalles().subscribe({
      next: (response) => {
        this.salles = response;
        console.log('Salles récupérées:', response);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des salles:', error);
      },
    });
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
}
