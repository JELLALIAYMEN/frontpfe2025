import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ModuleService } from 'src/app/services/ModuleService';
import { DeleteModuleComponent } from "../delete-module/delete-module.component";
import {DetailModuleComponent} from "../detail-module/detail-module.component";  // Importing the new Details component

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.scss']
})
export class AddModuleComponent implements OnInit {
  moduleForm!: FormGroup;


  openDetailsDialog() {
    // Open the dialog and pass the form data (or any data you want to display in the detail view)
    this.dialog.open(DetailModuleComponent, {
      data: this.moduleForm.value  // Pass the module form data here
    });
  }
  constructor(
    private service: ModuleService,
    private dialogRef: MatDialogRef<AddModuleComponent>,
    private fb: FormBuilder,
    private dialog: MatDialog  // Inject MatDialog for opening the dialog
  ) {}

  ngOnInit(): void {
    this.moduleForm = this.fb.group({
      nommodule: ['', [Validators.required]],
      matricule: ['', [Validators.required]],
      contenue: ['', [Validators.required]],
      date: ['', [Validators.required]],
      travailafaire: ['', [Validators.required]],
    });
    console.log('Formulaire initialisé');
  }

  addModule() {
    let module = {
      "contenue": this.moduleForm.value.contenue,
      "date": this.moduleForm.value.date,
      "nommodule": this.moduleForm.value.nommodule,
      "travailafaire": this.moduleForm.value.travailafaire
    }

    if (this.moduleForm.invalid) {
      console.log('Formulaire invalide');
      return;
    }

    this.service.saveModule(module, this.moduleForm.value.matricule).subscribe({
      next: (response) => {
        console.log('Module ajouté avec succès', response);
        this.dialogRef.close('Module ajouté');
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout de l\'module', error);
      }
    });
  }

  cancel() {
    this.dialogRef.close('Annulé');
  }



  // Accesseurs pour éviter les erreurs de typage dans le HTML
  get nommodule() { return this.moduleForm.get('nommodule'); }
  get matricule() { return this.moduleForm.get('matricule'); }
  get contenue() { return this.moduleForm.get('contenue'); }
  get date() { return this.moduleForm.get('date'); }
  get travailafaire() { return this.moduleForm.get('travailafaire'); }
}
