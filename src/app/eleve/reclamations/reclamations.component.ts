import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.scss']
})
export class ReclamationsComponent {

  reclamationForm: FormGroup; // Formulaire de réclamation
  successMessage: string | null = null; // Message de succès
  errorMessage: string | null = null; // Message d'erreur
  isLoading = false; // Indicateur de chargement
  reclamations: any[] = [];
  isLoadingReclamations: boolean = false;
  email: string | null = null;

  constructor(
    private reclamationsService: ReclamationService,
    private fb: FormBuilder
  ) {
    this.email = localStorage.getItem('email');

    // Initialisation du formulaire
    this.reclamationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      matricule: ['', Validators.required],
      sujet: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  
  ngOnInit(): void {
    this.loadReclamations();
  }

  // Soumettre la réclamation
  onSubmit(): void {
    if (this.reclamationForm.valid) {
      const { email, matricule, sujet, date } = this.reclamationForm.value;

      this.isLoading = true; // Activer le loader
      this.reclamationsService.reclamer(email, matricule, sujet, date).subscribe({
        next: (response) => {
          this.successMessage = 'Réclamation envoyée avec succès.';
          this.errorMessage = null;
          console.log('Réponse du serveur :', response);
          this.reclamationForm.reset(); // Réinitialiser le formulaire
          window.location.reload();
        },
        error: (error) => {
          this.successMessage = null;
          this.errorMessage = 'Erreur lors de l\'envoi de la réclamation.';
          console.error('Erreur:', error);
        },
        complete: () => {
          this.isLoading = false; // Désactiver le loader
        }
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      this.successMessage = null;
    }
  }

  loadReclamations() {
      this.isLoadingReclamations = true;
      this.reclamationsService.getReclamationsByEmail(this.email!).subscribe({
        next: (data) => {
          this.reclamations = data;
          this.isLoadingReclamations = false;
        },
        error: (error) => {
          console.error('Erreur lors du chargement des réclamations :', error);
          this.isLoadingReclamations = false;
        }
      });
  }
}