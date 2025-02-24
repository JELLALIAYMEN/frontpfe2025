import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteEtMoyenneService } from 'src/app/services/note-et-moyenne.service';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent {
  notes: any[] = [];
  trimesters: string[] = ['Trimestre1', 'Trimestre2', 'Trimestre3']; // Liste des trimestres
  selectedTrimester: string | null = null;
  addNoteForm: FormGroup;

  // Liste des types de notes possibles
  typeNotes: string[] = [
    'NOTE_CONTROLE_CONTINUE',
    'NOTE_EXAMEN_CONTROLE1',
    'NOTE_EXAMEN_CONTROLE2',
    'NOTE_EXAMEN_SYNTHÈSE',
    'NOTE_TP'
  ];
  formVisible: boolean = false;
  constructor(
    private noteService: NoteEtMoyenneService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NotesDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { eleveId: number; matiereId: number }
  ) {
    this.addNoteForm = this.fb.group({
      typeNote: ['', Validators.required],
      noteValue: ['', [Validators.required, Validators.min(0), Validators.max(20)]],
      coff: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    // Rien à charger initialement jusqu'à ce qu'un trimestre soit sélectionné
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

  addNote(): void {
    if (this.addNoteForm.valid && this.selectedTrimester) {
      const newNote = {
        ...this.addNoteForm.value,
        idmatiere: this.data.matiereId,
        idel: this.data.eleveId,
        trimestre: this.selectedTrimester,
      };
      this.noteService.saveNote(newNote).subscribe(
        (response) => {
          this.notes.push(response);
          this.addNoteForm.reset();
        },
        (error) => console.error('Erreur lors de l\'ajout de la note', error)
      );
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  toggleFormVisibility(): void {
    this.formVisible = !this.formVisible; // Inverse l'état de visibilité du formulaire
  }

}
