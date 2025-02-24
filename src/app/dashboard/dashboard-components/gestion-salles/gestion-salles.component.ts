import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DepartementService } from 'src/app/services/departement.service';
import { SallesService } from 'src/app/services/salles.service';
import { ModiferSalleComponent } from './modifer-salle/modifer-salle.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gestion-salles',
  templateUrl: './gestion-salles.component.html',
  styleUrls: ['./gestion-salles.component.scss']
})
export class GestionSallesComponent implements OnInit{

  menuItems = [
    { name: 'Gestion des salles', icon: 'fas fa-door-open', action: () => this.openSalle() },
    { name: 'Gestion des départements', icon: 'fas fa-building', action: () => this.openDep() },
  ];
  

  routerActive: string = "activelink";
  showSalleForm = false;
  showDepForm = false;

  handleMenuClick(item: any): void {
    item.action();
  }

  openSalle(): void {
    this.showSalleForm = !this.showSalleForm; 
    this.showDepForm = false; 
  }

  openDep(): void {
    this.showDepForm = !this.showDepForm; 
    this.showSalleForm = false; 
  }


  salles: any[] = [];
  openFormdiv: boolean = false;
  openFormdep: boolean = false;
  salleForm!: FormGroup;
  departementForm!: FormGroup;
  departements: any[] = [];

  constructor(
    private salleService: SallesService,
    private departmentService: DepartementService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAllSalles();
    this.getAllDepartements();
    this.salleForm = this.fb.group({
      nomdesalle: ['', [Validators.required]],
      departement: ['', [Validators.required]], // Contient le nom du département
    });
    this.departementForm = this.fb.group({
      nom: [''],
    });
  }
  ajouterDep() {
    const departement = this.departementForm.value;
    this.http.post('http://localhost:8099/departement/ajout', departement).subscribe({
      next: () => {
        alert('Département ajouté avec succès !');
        this.getAllDepartements();
      },
      error: () => alert('Erreur lors de l\'ajout du département.'),
    });
  }
  // Ajouter une salle
  ajouterSalle(): void {
    if (this.salleForm.valid) {
      const salleData = {
        nomdesalle: this.salleForm.value.nomdesalle,
      };
      const nomdep = this.salleForm.value.departement;

      this.salleService.ajoutSalle(salleData, nomdep).subscribe({
        next: (response) => {
          console.log('Salle ajoutée avec succès:', response);
          this.getAllSalles(); // Rafraîchir la liste
          this.salleForm.reset();
          this.openFormdiv = false; // Fermer le formulaire
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de la salle:', error);
        },
      });
    }
  }

  // Récupérer tous les départements
  getAllDepartements(): void {
    this.departmentService.getDepartements().subscribe({
      next: (response) => {
        this.departements = response;
        console.log('Départements récupérés:', this.departements);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des départements:', error);
      },
    });
  }

  // Récupérer toutes les salles
  getAllSalles(): void {
    this.salleService.afficherSalles().subscribe({
      next: (response) => {
        this.salles = response;
        console.log('Salles récupérées:', response);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des salles:', error);
      },
    });
  }

  // Ouvrir ou fermer le formulaire
  openForm(): void {
    this.openFormdiv = !this.openFormdiv;
  }
  openFormDep(){
    this.openFormdep = !this.openFormdep;
  }
  modifierSalle(salle: any): void {
    const dialogRef = this.dialog.open(ModiferSalleComponent, {
      data: salle 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Salle modifiée !");
        window.location.reload();
      } else {
        console.log("Modification annulée");
      }
    });
  }
  
}
