import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DisciplineService } from 'src/app/services/discipline.service';

@Component({
  selector: 'app-modifier-discipline',
  templateUrl: './modifier-discipline.component.html',
  styleUrls: ['./modifier-discipline.component.scss']
})
export class ModifierDisciplineComponent {
  disciplineForm!: FormGroup;
  existingVideoUrl: string | null = null;
  selectedVideoFile: File | null = null;
  selectedVideoPreviewUrl: string | null = null;

  constructor(
    private fb: FormBuilder,
    private disciplineService: DisciplineService,
    private dialogRef: MatDialogRef<ModifierDisciplineComponent>,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.disciplineService.getDisciplineViode(this.data.id).subscribe(
      (url: string) => {
        this.existingVideoUrl = url;
      },
      (error) => {
        console.error('Erreur lors du chargement de la vidéo :', error);
      }
    );
  }

  initForm(): void {
    this.disciplineForm = this.fb.group({
      cause: [this.data.cause],
      status: [this.data.status],
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      // Remplacer l'ancienne vidéo par la nouvelle
      this.selectedVideoFile = input.files[0];

      // Créez une URL pour afficher un aperçu de la vidéo sélectionnée
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedVideoPreviewUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedVideoFile);
    }
}

  modifierDiscipline(): void {
    const formValues = this.disciplineForm.value;
    // Si une nouvelle vidéo a été sélectionnée, on l'envoie au service
    const videoFile = this.selectedVideoFile ? this.selectedVideoFile : null;

    this.disciplineService.updateDiscipline(
      this.data.id,
      formValues.cause,
      videoFile! // Envoi de la vidéo si elle est sélectionnée, sinon envoi de null
    ).subscribe({
      next: (response) => {
        console.log('Discipline modifiée avec succès', response);
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error('Erreur lors de la modification de la discipline', error);
      }
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
  
}
