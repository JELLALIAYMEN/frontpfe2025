import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ParentEleveService } from 'src/app/services/parent-eleve.service';
interface ParentEleve {
  parent: any;
  eleve: any;
}
@Component({
  selector: 'app-assigner-eleves',
  templateUrl: './assigner-eleves.component.html',
  styleUrls: ['./assigner-eleves.component.scss']
})
export class AssignerElevesComponent implements OnInit{
  assignForm!: FormGroup;
  emailParent:any; 
  mesEleves: ParentEleve[] = [];

  constructor(
    private dialogRef: MatDialogRef<AssignerElevesComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private parentEleveService: ParentEleveService
  ) {
    this.emailParent = this.data.email
  }

  ngOnInit(): void {
    this.assignForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.loadEleves();
  }

  assigner() {
    if (this.assignForm.valid && this.emailParent) {
      const emailEleve = this.assignForm.get('email')?.value;  // Retrieve the email from the form
  
      console.log("email élève:", emailEleve);
  
      // Call the service to assign the student to the parent
      this.parentEleveService.affecter(this.emailParent, emailEleve).subscribe(
        (response) => {
          alert('Élève affecté avec succès!');
          this.loadEleves(); // Refresh the list of students
          this.assignForm.reset(); // Reset the form
        },
        (error) => {
          console.error('Erreur lors de l\'affectation de l\'élève:', error);
          alert('Erreur lors de l\'affectation de l\'élève');
        }
      );
    } else {
      alert('Le formulaire n\'est pas valide ou l\'email du parent n\'est pas défini');
    }
  }

  // Méthode pour annuler l'opération
  cancel() {
    this.dialogRef.close('Annulé');
  }

  // Méthode pour charger la liste des élèves du parent
  loadEleves() {
    if (this.emailParent) {
      this.parentEleveService.afficherMesEleves(this.emailParent).subscribe(eleves => {
        this.mesEleves = eleves;
      });
    }
  }

  // Accesseur pour obtenir l'email du formulaire
  get email() { return this.assignForm.get('email'); }
}
