import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent {
  classeForm!: FormGroup;
  departements: any[] = []; 

  constructor(
    private fb: FormBuilder,
    private departementService: DepartementService,
    private classService: ClasseService  ) {}

  ngOnInit(): void {
    this.classeForm = this.fb.group({
      nomclasse: ['', Validators.required],
      departement: ['', Validators.required],
    });
    this.departementService.getDepartements().subscribe(
      (data: any) => {
        this.departements = data; // Remplir la liste des départements
      },
      (error) => {
        console.error('Erreur lors de la récupération des départements:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.classeForm.valid) {
      // Récupérer les données du formulaire
      const formData = this.classeForm.value;
      
      // Créer l'objet à envoyer à l'API
      const classeToSend = {
        nomclasse: formData.nomclasse,
        departement: { id: formData.departement } // Assurez-vous que l'API attend un objet avec un ID de département
      };

      // Appeler l'API pour ajouter la classe
      this.classService.addClass(classeToSend).subscribe(
        (response: any) => {
          if (response === 'true') {
            alert('Classe ajoutée avec succès.');
            window.location.reload();
            this.classeForm.reset();
          } else {
            alert('Une classe avec ce nom existe déjà.');
          }
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la classe :', error);
          alert('Une erreur est survenue lors de l\'ajout de la classe.');
        }
      );
    }
  }
}
