import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { ConfirmationSuppressionComponent } from './confirmation-suppression/confirmation-suppression.component';
 // Import du composant détails
import { UserService } from 'src/app/services/user.service';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { DetailsEnseignantComponent } from './dashboard/dashboard-components/gestion-enseignants/details-enseignant/details-enseignant.component';

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
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data.filter((user: any) => user.profil === 'enseignant');
        this.filtredEnseignants = [...this.users];
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des enseignants:', err);
      },
    });

    const searchSubscription = this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((query) => this.searchEnseignants(query));

    this.subscriptions.add(searchSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  detailsEnseignant(user: any): void {
    this.dialog.open(DetailsEnseignantComponent, {
      width: '600px',
      data: { enseignant: user }
    });
  }

  openAddEnseignant(): void {
    const dialogRef = this.dialog.open(AddEnseignantComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.reloadEnseignants();
      }
    });
  }

  openConfirmationDialog(id: any): void {
    const dialogRef = this.dialog.open(ConfirmationSuppressionComponent, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.reloadEnseignants();
      }
    });
  }

  onSearchInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value;
    this.searchSubject.next(query);
  }

  searchEnseignants(query: string): void {
    query = query.toLowerCase().trim();
    if (query) {
      this.filtredEnseignants = this.users.filter((user) =>
        user.nom.toLowerCase().includes(query) ||
        user.prenom.toLowerCase().includes(query)
      );
    } else {
      this.filtredEnseignants = [...this.users];
    }
  }

  modifierEnseignant(user: any): void {
    const dialogRef = this.dialog.open(AddEnseignantComponent, {
      width: '600px',
      data: { enseignant: user }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.reloadEnseignants();
      }
    });
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
