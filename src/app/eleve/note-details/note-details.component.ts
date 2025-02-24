import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteEtMoyenneService } from 'src/app/services/note-et-moyenne.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent {
  notes: any[] = [];
  trimesters: string[] = ['Trimestre1', 'Trimestre2', 'Trimestre3']; // Liste des trimestres
  selectedTrimester: string | null = null;

  // Liste des types de notes possibles
  typeNotes: string[] = [
    'NOTE_CONTROLE_CONTINUE',
    'NOTE_EXAMEN_CONTROLE1',
    'NOTE_EXAMEN_CONTROLE2',
    'NOTE_EXAMEN_SYNTHÈSE',
    'NOTE_TP'
  ];
  constructor(
    private noteService: NoteEtMoyenneService,
    public dialogRef: MatDialogRef<NoteDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { eleveId: number; matiereId: number }
  ) {}

  ngOnInit(): void {
  }

  loadNotes(): void {
    if (this.selectedTrimester) {
      this.noteService
        .getNotes(this.data.eleveId, this.data.matiereId, this.selectedTrimester)
        .subscribe((response) => {
          this.notes = response;
        });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}