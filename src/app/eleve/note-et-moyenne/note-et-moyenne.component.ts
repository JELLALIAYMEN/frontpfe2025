import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatieresService } from 'src/app/services/matieres.service';
import { NoteEtMoyenneService } from 'src/app/services/note-et-moyenne.service';
import { UserService } from 'src/app/services/user.service';
import { NoteDetailsComponent } from '../note-details/note-details.component';

@Component({
  selector: 'app-note-et-moyenne',
  templateUrl: './note-et-moyenne.component.html',
  styleUrls: ['./note-et-moyenne.component.scss']
})
export class NoteEtMoyenneComponent  implements OnInit {
  matieres: any[] = [];
  userId: any;
  moyennes: { [matiereId: number]: { [trimestre: string]: number } } = {};
  eleve: any;
  moyenneAnnuelle: number = 0; // Une seule moyenne annuelle pour l'élève
  email = localStorage.getItem('email'); 

  constructor(
    private matiereService: MatieresService,
    private route: ActivatedRoute,
    private moyAndNotService: NoteEtMoyenneService,
    private dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserAndMatiereAndMoyenns()
  }

  getUserAndMatiereAndMoyenns() {
    this.userService.userbyemail(this.email!).subscribe(
      (response) => {
        this.eleve = response;
        this.userId= this.eleve.id;
        console.log('Élève récupéré:', this.userId);
        this.getAllMatieres();
        this.getMoyenneAnnuelle();
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
    console.log("test", this.userId);
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
    const dialogRef = this.dialog.open(NoteDetailsComponent, {
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
