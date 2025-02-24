import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ParentService } from 'src/app/services/parent.service';

@Component({
  selector: 'app-selection-eleve',
  templateUrl: './selection-eleve.component.html',
  styleUrls: ['./selection-eleve.component.scss']
})
export class SelectionEleveComponent {
  students: any[] = [];
  targetRoute: string = '';

  constructor(
    private parentService: ParentService, 
    public dialogRef: MatDialogRef<SelectionEleveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { targetRoute: string }) {
      this.targetRoute = data.targetRoute;
    }

  ngOnInit(): void {
    const emailParent = localStorage.getItem('email');
    console.log("Email parent:", emailParent);

    // Récupération des élèves via le service parent
    this.parentService.getMesEleves(emailParent!).subscribe(
      (data) => {
        this.students = data;
        console.log("Mes élèves:", data);
      },
      (error) => {
        console.error('Erreur lors du chargement des élèves :', error);
      }
    );
  }

  selectStudent(student: any): void {
    console.log('Élève sélectionné :', student);
    if (student) {
      this.dialogRef.close(student); // Ferme le dialogue et renvoie l'élève sélectionné
    } else {
      console.error("Aucun élève sélectionné");
    }
  }
}
