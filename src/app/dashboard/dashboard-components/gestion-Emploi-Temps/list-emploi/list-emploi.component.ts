import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmploiDuTempsService } from 'src/app/services/emploi-du-temps.service';
import { EnvoyerEmploiComponent } from '../envoyer-emploi/envoyer-emploi.component';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'app-list-emploi',
  templateUrl: './list-emploi.component.html',
  styleUrls: ['./list-emploi.component.scss']
})
export class ListEmploiComponent implements OnInit{
  emplois: any[] = [];
  filtredEmploi: any[] = [];
  selectedClasse: string = '';
  classes: any[] = [];

  constructor(
    private emploiSer: EmploiDuTempsService,
    private dialog: MatDialog,
    private classService: ClasseService
  ) {}

  ngOnInit(): void {
    // Subscribe to emplois and apply initial filter
    this.emploiSer.emplois$.subscribe((data) => {
      this.emplois = data;
      this.applyFilter(); // Apply filter when data is updated
    });

    // Load all emplois at startup
    this.emploiSer.allEmploi();

    // Load all classes
    this.getAllClasses();
  }

  applyFilter(): void {
    if (this.selectedClasse) {
      this.filtredEmploi = this.emplois.filter(
        emploi => emploi.classe?.nomclasse === this.selectedClasse
      );
    } else {
      this.filtredEmploi = this.emplois; // No filter if no class is selected
    }
  }

  envoyer(e: any): void {
    this.dialog.open(EnvoyerEmploiComponent, {
      data: e,
      width: "600px"
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
      }
    });
  }
}
