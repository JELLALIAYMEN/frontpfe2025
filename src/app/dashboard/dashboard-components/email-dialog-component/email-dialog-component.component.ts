import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-dialog-component',
  templateUrl: './email-dialog-component.component.html',
  styleUrls: ['./email-dialog-component.component.scss']
})
export class EmailDialogComponentComponent implements OnInit {
  emailForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EmailDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // On passe le matricule ou d'autres données
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Initialisation du formulaire ici, une seule fois
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Méthode pour soumettre le formulaire
  submit() {
    if (this.emailForm.valid) {
      const emailData = this.emailForm.value;
      console.log('Email du parent:', emailData.email);
      this.dialogRef.close(emailData.email); // On retourne l'email
    }
  }

  // Fermer le dialog sans rien faire
  close() {
    this.dialogRef.close();
  }
}
