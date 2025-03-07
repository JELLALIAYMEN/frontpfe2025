import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalendrierExService } from 'src/app/services/calendrier-ex.service';
import { ClasseService } from 'src/app/services/classe.service';
import { MatDialog } from '@angular/material/dialog';
import { EnvoyerAElevesComponent } from '../envoyer-aeleves/envoyer-aeleves.component';

@Component({
  selector: 'app-list-calendrier-ex',
  templateUrl: './list-calendrier-ex.component.html',
  styleUrls: ['./list-calendrier-ex.component.scss']
})
export class ListCalendrierExComponent implements OnInit, OnDestroy {
  calendriers: any[] = [];
  filtredCalendrier: any[] = [];
  selectedClasse: string = '';
  classes: any[] = [];
  private calendriersSubscription!: Subscription;

  constructor(
    private calendrierExService: CalendrierExService,
    private dialog: MatDialog,
    private classService: ClasseService
  ) {}

  ngOnInit(): void {
    this.calendriersSubscription = this.calendrierExService.calendriers$.subscribe((data) => {
      this.calendriers = data;
      this.applyFilter(); // Calling applyFilter() to filter the calendriers
    });
    this.getAllClasses();

    // Charger les calendriers au démarrage
    this.calendrierExService.getAllCalendriers();
  }

  ngOnDestroy(): void {
    if (this.calendriersSubscription) {
      this.calendriersSubscription.unsubscribe();
    }
  }

  // Method to apply the filter based on selected class
  applyFilter(): void {
    if (this.selectedClasse) {
      this.filtredCalendrier = this.calendriers.filter(
        (calendrier) => calendrier.classe?.nomclasse === this.selectedClasse
      );
    } else {
      this.filtredCalendrier = this.calendriers; // No filter if no class is selected
    }
  }

  // Define the envoyer method that opens a dialog
  envoyer(calendrier: any): void {
    this.dialog.open(EnvoyerAElevesComponent, {
      data: calendrier, // Passing the calendrier object to the dialog component
      width: '600px',
    });
  }

  getAllClasses(): void {
    this.classService.allClasses().subscribe({
      next: (response) => {
        this.classes = response;
        console.log('Classes récupérées:', this.classes);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des classes:', error);
      },
    });
  }
}


