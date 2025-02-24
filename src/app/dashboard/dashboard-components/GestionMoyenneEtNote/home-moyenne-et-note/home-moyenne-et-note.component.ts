import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatieresService } from 'src/app/services/matieres.service';
import { NoteEtMoyenneService } from 'src/app/services/note-et-moyenne.service';
import { NotesDetailsComponent } from '../notes-details/notes-details.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-moyenne-et-note',
  templateUrl: './home-moyenne-et-note.component.html',
  styleUrls: ['./home-moyenne-et-note.component.scss']
})
export class HomeMoyenneEtNoteComponent implements OnInit {
  matieres: any[] = [];
  userId: any;
  moyennes: { [matiereId: number]: { [trimestre: string]: number } } = {};
  eleve: any;
  moyenneAnnuelle: number = 0; // Une seule moyenne annuelle pour l'élève

  constructor(
    private matiereService: MatieresService,
    private route: ActivatedRoute,
    private moyAndNotService: NoteEtMoyenneService,
    private dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    console.log('User ID:', this.userId);
    this.getAllMatieres();
    this.getUserById();
    this.getMoyenneAnnuelle();
  }

  getUserById() {
    this.userService.getUserById(this.userId).subscribe(
      (response) => {
        this.eleve = response;
        console.log('Élève récupéré:', this.eleve);
      },
      (error) => {
        console.error("Erreur lors de la récupération de l'élève:", error);
      }
    );
  }

  getAllMatieres() {
    this.matiereService.allMatieres().subscribe(
      (response) => {
        this.matieres = response;
        console.log('Récupération des matières avec succès');
        this.loadMoyennes();
      },
      (error) => {
        console.error('Erreur lors de la récupération des matières', error);
      }
    );
  }

  loadMoyennes(): void {
    this.matieres.forEach((matiere) => {
      this.moyennes[matiere.id] = {};
      ['Trimestre1', 'Trimestre2', 'Trimestre3'].forEach((trimestre) => {
        this.moyAndNotService
          .calculerMoyenneParMatiereEtEleve(this.userId, trimestre, matiere.id)
          .subscribe(
            (moyenne) => {
              this.moyennes[matiere.id][trimestre] = moyenne;
              console.log(
                `Moyenne calculée pour la matière ${matiere.id}, ${trimestre}:`,
                moyenne
              );
            },
            (error) => {
              console.error(
                `Erreur lors du calcul de la moyenne pour la matière ${matiere.id}, trimestre ${trimestre}`,
                error
              );
              this.moyennes[matiere.id][trimestre] = 0; // Valeur par défaut
            }
          );
      });
    });
  }

  getMoyenneAnnuelle() {
    this.moyAndNotService.getMoyenneAnnuelle(this.userId).subscribe(
      (response) => {
        this.moyenneAnnuelle = response.toFixed(2) ; // Stocke la moyenne annuelle globale de l'élève
        console.log('Moyenne annuelle récupérée:', this.moyenneAnnuelle);
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération de la moyenne annuelle:',
          error
        );
      }
    );
  }

  openNoteDetailsDialog(matiereId: number): void {
    const dialogRef = this.dialog.open(NotesDetailsComponent, {
      width: '700px',
      data: { eleveId: this.userId, matiereId },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog fermé');
    });
  }

  getMoyenneDisplay(matiereId: number, trimestre: string): string {
    const moyenne = this.moyennes[matiereId]?.[trimestre] || 0;
    return moyenne.toFixed(2); // Format avec deux chiffres après la virgule
  }

}
