import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmploiDuTempsService } from 'src/app/services/emploi-du-temps.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-envoyer-emploi',
  templateUrl: './envoyer-emploi.component.html',
  styleUrls: ['./envoyer-emploi.component.scss']
})
export class EnvoyerEmploiComponent {
  eleves: any[] = [];
  isLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EnvoyerEmploiComponent>,
    private emploiSer: EmploiDuTempsService,
    private utilisateurService: UserService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.fetchElevesByClass();
  }

  /**
   * Récupère la liste des élèves en fonction de la classe.
   */
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

  /**
   * Parcourt la liste des élèves et leur envoie un email.
   */
  confirmLenvoie(): void {
    if (this.eleves && this.eleves.length > 0) {
      this.isLoading = true;
      
      // Boucle pour envoyer l'email à chaque élève
      this.eleves.forEach((eleve) => {
        this.emploiSer.envoyerEmail(
          eleve.email, 
          this.data.classe.nomclasse,
        ).subscribe({
          next: (response) => {
            console.log(`Email envoyé à ${eleve.email}`);
          },
          error: (error) => {
            console.error(`Erreur lors de l'envoi du mail`, error);
            alert(`Une erreur est survenue lors de l'envoi du mail.`);
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

  /**
   * Affiche un résumé de l'envoi des emails une fois terminé.
   */
  terminerEnvoi(emailsEnvoyes: number, erreurs: number): void {
    this.isLoading = false;

    if (erreurs === 0) {
      alert(`Tous les ${emailsEnvoyes} emails ont été envoyés avec succès.`);
    } else {
      alert(
        `${emailsEnvoyes} emails envoyés avec succès, mais ${erreurs} erreurs se sont produites.`
      );
    }

    this.dialogRef.close({ emailsEnvoyes, erreurs });
  }

  /**
   * Annule l'opération et ferme la boîte de dialogue.
   */
  cancel(): void {
    this.dialogRef.close('Annulé');
  }
}
