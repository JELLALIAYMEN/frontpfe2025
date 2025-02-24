import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DisciplineService } from 'src/app/services/discipline.service';
import { DetaillsDisciplineComponent } from './detaills-discipline/detaills-discipline.component';

@Component({
  selector: 'app-gestion-discipline',
  templateUrl: './gestion-discipline.component.html',
  styleUrls: ['./gestion-discipline.component.scss']
})
export class GestionDisciplineComponent implements OnInit{
  disciplines: any[] = [];
  status: string = '';
  
  constructor(
    private disciplineService: DisciplineService, 
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllDisciplines();
  }

  getAllDisciplines() {
    this.disciplineService.getDisciplines().subscribe(
      (response: any[]) => {
        this.disciplines = response.filter((discipline:any) => discipline.statusDisc ==="PENDING_APPROVAL");
        console.log('Liste récupérée avec succès', response);
      },
      (error) => {
        console.error('Erreur lors de la récupération des données', error);
      }
    );
  }
  
  removeDiscipline(discipline: any) {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir suprimer cette discipline ?');
    if(confirmation){
    this.disciplineService.deleteDiscipline(discipline.id).subscribe(
      () => {
        this.disciplines = this.disciplines.filter(d => d.id !== discipline.id);
        console.log(`Discipline de l'élève ${discipline.eleve.nom} supprimée.`);
      },
      (error) => {
        console.error('Erreur lors de la suppression de la discipline', error);
      }
    );
   } else {
    console.log("supprission annulé");
   }
  }

  openDisciplineDetailsInDialog(discipline: any) {
    const dialogRef = this.dialog.open(DetaillsDisciplineComponent, {
      data: { 
        id: discipline.id,
        eleve: discipline.eleve,
        cause: discipline.cause,
        date: discipline.date,
        status: discipline.statusDisc,
        response: ''
      },
      width: '400px',
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.status = result.status;
            }
    });
  }
  
}
