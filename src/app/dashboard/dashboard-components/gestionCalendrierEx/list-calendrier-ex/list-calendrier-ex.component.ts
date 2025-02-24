import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendrierExService } from 'src/app/services/calendrier-ex.service';
import { EnvoyerAElevesComponent } from '../envoyer-aeleves/envoyer-aeleves.component';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'app-list-calendrier-ex',
  templateUrl: './list-calendrier-ex.component.html',
  styleUrls: ['./list-calendrier-ex.component.scss']
})
export class ListCalendrierExComponent {
  calendriers: any[] = [];
  filtredCalendrier: any[] = [];
  selectedClasse: string = '';
  classes: any[] = [];

  constructor(
    private calendrierExService: CalendrierExService,
    private dialog: MatDialog,
    private classService: ClasseService
  ) {}

  ngOnInit(): void {
    this.calendrierExService.calendriers$.subscribe((data) => {
      this.calendriers = data;
      this.applyFilter();
    });
    this.getAllClasses();

    // Charger les calendriers au démarrage
    this.calendrierExService.getAllCalendriers();
  }
  envoyer(c: any): void {
    this.dialog.open(EnvoyerAElevesComponent, {
      data: c ,
      width: "600px"
    })
  }
  applyFilter(): void {
    if (this.selectedClasse) {
      this.filtredCalendrier = this.calendriers.filter(
        calendrier => calendrier.classe?.nomclasse === this.selectedClasse
      );
    } else {
      this.filtredCalendrier = this.calendriers; // No filter if no class is selected
    }
  }
  getAllClasses(): void {
    this.classService.allClasses().subscribe({
      next: (response) => {
        this.classes = response;
        console.log('Classes récupérées:', this.classes);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des classes:', error);
      }
    });
  }
}
