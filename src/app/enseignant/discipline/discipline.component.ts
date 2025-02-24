import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';

import { AddDisciplineComponent } from './add-discipline/add-discipline.component';
import { ModifierDisciplineComponent } from './modifier-discipline/modifier-discipline.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';

import { ClasseService } from 'src/app/services/classe.service';
import { DisciplineService } from 'src/app/services/discipline.service';
import { UserService } from 'src/app/services/user.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.scss']
})
export class DisciplineComponent implements OnInit, OnDestroy {
  selectedClasse: string = '';
  classes: any[] = [];
  disciplines: any[] = [];
  filtredDisicplines: any[] = [];
  email: string | null = localStorage.getItem('email');
  enseignant: any;
  userId: number | null = null;
  searchQuery: string = ''; // Texte de recherche
  
  private subscriptions: Subscription = new Subscription();
  private searchSubject: Subject<string> = new Subject();


  constructor(
    private dialog: MatDialog,
    private classService: ClasseService,
    private disciplineService: DisciplineService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadEnseignant();
    this.getAllClasses();
    const searchSubscription = this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(query => this.searchDisciplines(query));
    
    this.subscriptions.add(searchSubscription);
  }

  ngOnDestroy(): void {
    // Annulation de tous les abonnements pour éviter les fuites de mémoire
    this.subscriptions.unsubscribe();
  }

  /**
   * Charge les informations de l'enseignant par email
   */
  private loadEnseignant(): void {
    if (this.email) {
      const sub = this.userService.userbyemail(this.email).subscribe({
        next: (response) => {
          this.enseignant = response;
          this.userId = this.enseignant.id;
          this.loadDisciplinesByEnseignant();
        },
        error: (error) => {
          console.error("Erreur lors de la récupération de l'enseignant:", error);
        }
      });
      this.subscriptions.add(sub);
    }
  }

  /**
   * Charge les disciplines pour l'enseignant courant
   */
  private loadDisciplinesByEnseignant(): void {
    if (this.userId) {
      const sub = this.disciplineService.listDisciplinesByEnseignant(this.userId).subscribe({
        next: (response) => {
          this.disciplines = response;
          this.filtredDisicplines = [...this.disciplines];
          console.log("Disciplines chargées avec succès");
        },
        error: (error) => {
          console.error("Erreur lors de la récupération des disciplines:", error);
        }
      });
      this.subscriptions.add(sub);
    }
  }

  /**
   * Récupère toutes les classes disponibles
   */
  private getAllClasses(): void {
    const sub = this.classService.allClasses().subscribe({
      next: (response) => {
        this.classes = response;
        console.log('Classes récupérées:', this.classes);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des classes:', error);
      }
    });
    this.subscriptions.add(sub);
  }

  /**
   * Filtre les disciplines par classe sélectionnée
   */
  filterByClasse(): void {
    console.log("Classe sélectionnée:", this.selectedClasse);
    if (this.selectedClasse) {
      this.filtredDisicplines = this.disciplines.filter(
        (discipline) =>
          discipline?.eleve?.classe?.nomclasse.toLowerCase() === this.selectedClasse.toLowerCase()
      );
    } else {
      this.filtredDisicplines = [...this.disciplines];
    }
  }

  /**
   * Ouvre le dialog pour ajouter une discipline
   */
  openAddDiscipline(): void {
    const dialogRef = this.dialog.open(AddDisciplineComponent, { width: '600px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Discipline ajoutée avec succès");
        window.location.reload();
      } else {
        console.log("Ajout annulé");
      }
    });
  }

  /**
   * Ouvre le dialog pour modifier une discipline
   * @param discipline Discipline à modifier
   */
  modifierDiscipline(discipline: any): void {
    const dialogRef = this.dialog.open(ModifierDisciplineComponent, 
      { width: '600px', data: discipline });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        window.location.reload();
        console.log("Discipline modifiée avec succès");
      } else {
        console.log("Modification annulée");
      }
    });
  }

  /**
   * Ouvre le dialog de confirmation pour supprimer une discipline
   * @param id ID de la discipline à supprimer
   */
  openConfirmationDialog(discipline: any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, 
      { width: '600px', data: discipline});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        window.location.reload();
        console.log("Discipline supprimé avec succès");
      } else {
        console.log("Suppression annulée");
      }
    });
  }
  sendToAdmin(id: number) {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir valider cette discipline avec l\'admin ?');
    
    if (confirmation) {
      this.disciplineService.sendToAdmin(id).subscribe(
        response => {
          console.log("Envoyé à l'admin");
          window.location.reload();
        },
        error => {
          console.log("Envoi à l'admin annulé");
        }
      );
    } else {
      console.log("Action annulée par l'utilisateur");
    }
  }
  
/**
   * Fonction de recherche
   */
searchDisciplines(query: string): void {
  query = query.toLowerCase().trim();
  if (query) {
    this.filtredDisicplines = this.disciplines.filter(discipline =>
      discipline.eleve.nom.toLowerCase().includes(query) ||
      discipline.eleve.prenom.toLowerCase().includes(query)
    );
  } else {
    this.filtredDisicplines = [...this.disciplines];
  }
}

/**
 * Appel de la méthode de recherche au changement du texte dans la barre de recherche
 */
onSearchInput(event: Event): void {
  const inputElement = event.target as HTMLInputElement;
  const query = inputElement.value;
  if (query) {
    this.searchSubject.next(query);
  }
}
  

}
