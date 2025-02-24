import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CalendrierExService } from 'src/app/services/calendrier-ex.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-envoyer-aeleves',
  templateUrl: './envoyer-aeleves.component.html',
  styleUrls: ['./envoyer-aeleves.component.scss']
})
export class EnvoyerAElevesComponent implements OnInit {
  eleves: any[] = [];
  classe: string = '';  
  isLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EnvoyerAElevesComponent>,
    private calendrierExService: CalendrierExService,
    private utilisateurService: UserService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.fetchElevesByClass();
  }

  fetchElevesByClass(): void {
    this.utilisateurService.getElevesByClass(this.data.classe.nomclasse).subscribe(
      (data: any[]) => {
        this.eleves = data;
        console.log(this.eleves); 
      },
      (error) => {
        console.error('Erreur de récupération des élèves:', error);
      }
    );
  }

  // Méthode pour envoyer un email à chaque élève
  confirmerLenvoie(): void {
    if (this.eleves && this.eleves.length > 0) {
      this.isLoading = true;
      
      // Boucle pour envoyer l'email à chaque élève
      this.eleves.forEach((eleve) => {
        this.calendrierExService.envoyeremail(
          eleve.email, 
          this.data.classe.nomclasse,
          this.data.trimestre,
          this.data.typecalendrier
        ).subscribe({
          next: (response) => {
            console.log(`Email envoyé à ${eleve.email}`);
          },
          error: (error) => {
            console.error(`Erreur lors de l'envoi du mail à ${eleve.email} :`, error);
            alert(`Une erreur est survenue lors de l'envoi du mail à ${eleve.email}.`);
          }
        });
      });

      this.isLoading = false;
      alert('Emails envoyés avec succès à tous les élèves.');
      this.dialogRef.close('Envoyé');
    } else {
      this.isLoading = false;
      alert('Aucun élève à qui envoyer l\'email.');
    }
  }

  cancel() {
    this.dialogRef.close('Annulé');
  
  }
}
