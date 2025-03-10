import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from 'src/app/services/classe.service';
import { MatieresService } from 'src/app/services/matieres.service';


@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {
  classeForm!: FormGroup;
  sousClasses: any[] = [];
  matieres: any[] = [];

  constructor(
    private fb: FormBuilder,
    private classService: ClasseService,

    private matiereService: MatieresService
  ) {}

  ngOnInit(): void {
    this.classeForm = this.fb.group({
      nomclasse: ['', Validators.required],
      nomssousclasse: ['', Validators.required],
      matiere: ['', Validators.required],
      matricule: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
    });

    // Récupérer les sous-classes
    this.classService.getSousClasses().subscribe(
      (data: any) => {
        this.sousClasses = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des sous-classes:', error);
        alert('Erreur lors de la récupération des sous-classes');
      }
    );

    // Récupérer les matières
    this.matiereService.allMatieres().subscribe(
      (data: any) => this.matieres = data,
      (error) => console.error('Erreur lors de la récupération des matières:', error)
    );
  }





}
