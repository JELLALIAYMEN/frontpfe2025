import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { DetailsReclamationComponent } from './details-reclamation/details-reclamation.component';
import { ReponseComponent } from './reponse/reponse.component';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.scss']
})
export class ReclamationsComponent implements OnInit {
  email: string | null = null;
  reclamations: any[] = [];  // Variable pour stocker les réclamations récupérées
  loading: boolean = true;   // Variable pour contrôler le chargement
  errorMessage: string | null = null;

  constructor(
    private reclamationService: ReclamationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Récupérer l'email depuis localStorage
    this.email = localStorage.getItem("email");

    if (this.email) {
      // Appeler la méthode du service pour récupérer les réclamations
      this.reclamationService.getReclamationsByDestinataire(this.email).subscribe({
        next: (data) => {
          this.reclamations = data;  // Stocker les réclamations récupérées
          this.loading = false;      // Masquer le loader
        },
        error: (error) => {
          this.errorMessage = 'Erreur lors de la récupération des réclamations.';
          this.loading = false;  // Masquer le loader
          console.error('Erreur:', error);
        }
      });
    } else {
      this.errorMessage = 'Email non trouvé dans le stockage local.';
      this.loading = false;
    }
  }

  detailReclamation(rec:any): void {
      this.dialog.open(DetailsReclamationComponent, {
        width: '600px',
        data: rec
      })
  }
  repondre(reclamation: any):void{
    this.dialog.open(ReponseComponent, {
      width: '600px',
      data: reclamation
    })
  }
}