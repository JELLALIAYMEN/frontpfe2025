import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CalendrierExService } from 'src/app/services/calendrier-ex.service';
import { ClasseService } from 'src/app/services/classe.service';
import { MatieresService } from 'src/app/services/matieres.service';
import { SallesService } from 'src/app/services/salles.service';

@Component({
  selector: 'app-add-calendrier-ex',
  templateUrl: './add-calendrier-ex.component.html',
  styleUrls: ['./add-calendrier-ex.component.scss']
})
export class AddCalendrierExComponent implements OnInit {
  calendrierForm!: FormGroup;
  classes: any[] = [];
  matieres: any[] = [];
  salles: any[] = [];
  isLoading = false;
  joursDeLaSemaine: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  trimestre: string[] = ['Trimestre 1', 'Trimestre 2', 'Trimestre 3'];

  constructor(
    private calendrierExSer: CalendrierExService,
    private fb: FormBuilder,
    private classService: ClasseService,
    private dialogRef: MatDialogRef<AddCalendrierExComponent>,
    private matiereService: MatieresService,
    private salleService: SallesService
  ) {}

  ngOnInit(): void {
    this.getAllClasses();
    this.getAllSalles();
    this.getAllMatieres();
    this.calendrierForm = this.fb.group({
      date: ['', Validators.required],
      nomjour: ['', Validators.required],
      periode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salles: ['', Validators.required],
      matiere: ['', Validators.required],
      classe: ['', Validators.required],
      typecalendrier: ['', Validators.required],
      t: ['', Validators.required],
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
    if (this.calendrierForm.valid) {
      const formValues = this.calendrierForm.value;
      this.isLoading = true;

      this.calendrierExSer.ccreerCalendrier(
        {
          date: formValues.date,
          nomjour: formValues.nomjour,
          periode: formValues.periode,
        },
        formValues.email,
        formValues.salles,
        formValues.matiere,
        formValues.classe,
        formValues.typecalendrier,
        formValues.t
      ).subscribe({
        next: (response) => {
          this.isLoading = false; // Arrête le loader
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
              alert('Calendrier ajouté avec succès!');
              this.dialogRef.close('Ajouté');
              break;
            default:
              alert('Une erreur inconnue est survenue.');
              break;
          }
        },
        error: (error) => {
          this.isLoading = false; // Arrête le loader
          console.error('Erreur lors de l\'ajout du calendrier :', error);
          alert('Une erreur est survenue lors de l\'ajout du calendrier.');
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
