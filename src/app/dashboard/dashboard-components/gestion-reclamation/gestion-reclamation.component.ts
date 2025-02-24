import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { DetailsReclamationComponent } from './details-reclamation/details-reclamation.component';

@Component({
  selector: 'app-gestion-reclamation',
  templateUrl: './gestion-reclamation.component.html',
  styleUrls: ['./gestion-reclamation.component.scss']
})
export class GestionReclamationComponent implements OnInit{
  reclamations: any[] = [];
  displayedColumns: string[] = ['type', 'description', 'status', 'action'];
  selectedReclamation: any;
  response: string = '';

  constructor(
    private reclamationService: ReclamationService,
    private dialog: MatDialog

  ) {}

  ngOnInit() {
    this.loadReclamations();
  }

  loadReclamations() {
    this.reclamationService.getAllReclamations().subscribe(
      (data) => {
        this.reclamations = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des réclamations :', error);
      }
    );
  }
  detailReclamation(rec:any): void {
    this.dialog.open(DetailsReclamationComponent, {
      width: '600px',
      data: rec
    })
  }
}
