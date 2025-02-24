import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { DetailsEnseigantComponent } from './details-enseigant/details-enseigant.component';
import { ModifierEnseignantComponent } from './modifier-enseignant/modifier-enseignant.component';
import { ConfirmationSuppressionComponent } from './confirmation-suppression/confirmation-suppression.component';
import { UserService } from 'src/app/services/user.service';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-gestion-enseignants',
  templateUrl: './gestion-enseignants.component.html',
  styleUrls: ['./gestion-enseignants.component.scss']
})
export class GestionEnseignantsComponent implements OnInit, OnDestroy {
  users: any[] = [];
  filtredEnseignants: any[] = [];
  private searchSubject: Subject<string> = new Subject<string>();
  private subscriptions: Subscription = new Subscription();

  constructor(private dialog: MatDialog, private userService: UserService) {}

  ngOnInit(): void {
    // Charger les enseignants
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data.filter((user: any) => user.profil === 'enseignant');
        this.filtredEnseignants = [...this.users]; // Initialisation des enseignants filtrés
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des enseignants:', err);
      },
    });

    // Gestion de la recherche avec debounce
    const searchSubscription = this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((query) => this.searchEnseignants(query));

    this.subscriptions.add(searchSubscription);
  }

  ngOnDestroy(): void {
    // Désabonnement pour éviter les fuites de mémoire
    this.subscriptions.unsubscribe();
  }

  openAddEnseignant(): void {
    const dialogRef = this.dialog.open(AddEnseignantComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Utilisateur ajouté!');
        this.reloadEnseignants();
      } else {
        console.log('Ajout annulé');
      }
    });
  }

  detailsEnseignant(user: any): void {
    this.dialog.open(DetailsEnseigantComponent, {
      width: '600px',
      data: user,
    });
  }

  modifierEnseignant(user: any): void {
    const dialogRef = this.dialog.open(ModifierEnseignantComponent, {
      width: '600px',
      data: user,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Utilisateur modifié!');
        this.reloadEnseignants();
      } else {
        console.log('Modification annulée');
      }
    });
  }

  openConfirmationDialog(id: any): void {
    const dialogRef = this.dialog.open(ConfirmationSuppressionComponent, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Enseignant supprimé!');
        this.reloadEnseignants();
      } else {
        console.log('Suppression annulée');
      }
    });
  }

  onSearchInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value;
    this.searchSubject.next(query); // Déclencher la recherche
  }

  searchEnseignants(query: string): void {
    query = query.toLowerCase().trim();
    if (query) {
      this.filtredEnseignants = this.users.filter((user) =>
        user.nom.toLowerCase().includes(query) || 
        user.prenom.toLowerCase().includes(query)
      );
    } else {
      this.filtredEnseignants = [...this.users]; // Réinitialiser si aucune recherche
    }
  }

  private reloadEnseignants(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data.filter((user: any) => user.profil === 'enseignant');
        this.filtredEnseignants = [...this.users];
      },
      error: (err) => {
        console.error('Erreur lors du rechargement des enseignants:', err);
      },
    });
  }
}
