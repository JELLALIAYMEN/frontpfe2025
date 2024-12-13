import { Component } from '@angular/core';
import {EmploiService} from '../emploi.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseService } from '../../gestion-classe/classe.service';
import { SalleService } from '../../gestion-salle/salle.service';
import { MatiereService } from '../../gestion-matiere/matiere.service';
import { UserService } from '../../gestion-utilisateur/userservice';
@Component({
  selector: 'app-creer-emploi',
  templateUrl: './creer-emploi.component.html',
  styleUrls: ['./creer-emploi.component.scss']
})
export class CreerEmploiComponent {
  emploiform!: FormGroup;
  isEleveSelected = false;
  isEleveSelected2 = false;
  allclasse:any ;
  salle:any ;
  alluser:any  ; 
  filteredUsers:any ;
  allmat:any ;
  constructor(private router: Router,private Service :EmploiService,private classeservice:ClasseService,
    private salleservice:SalleService,private servicematiere:MatiereService,private serviceuser:UserService 
  ) { }
  ngOnInit(): void {
    this.emploiform = new FormGroup({
      nomjour: new FormControl("", [Validators.required]),
      heure: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      nomclasse: new FormControl("", [Validators.required]),
      nomdesalle: new FormControl("", [Validators.required]),
      nommat: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
    });
    this.classeservice.allclasse().subscribe((res)=>{
    this.allclasse=res ;
    })
    this.salleservice.allsalle().subscribe((res)=>{
      this.salle=res ;
    })
    this.servicematiere.allmatiere().subscribe((res)=>{
      this.allmat =res ;
    })
    this.serviceuser.alluser().subscribe((res)=>{
      this.alluser=res ;
      this.filteredUsers = this.alluser.filter((user: any) => user.profil === 'Teacher');

    })
  }


  onProfilChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    
    this.isEleveSelected = selectedValue === 'Teacher';
    this.isEleveSelected2 = selectedValue === 'Eleve';

  }
  ajouter() {
    let e = {
      date: this.emploiform.value.date,
      nomjour: this.emploiform.value.nomjour,
      heure: this.emploiform.value.heure
    };
  
    this.Service.creeremploi(
      e,
      this.emploiform.value.email,
      this.emploiform.value.nomdesalle,
      this.emploiform.value.nommat,
      this.emploiform.value.nomclasse
    ).subscribe((res) => {
      const response = res.trim(); // Éliminer les espaces invisibles
  
  
      if (response === "true") {
        window.alert("Emploi Créé avec succès");
                this.router.navigate(["gestion-Emploi"]);

      } else if (response === "prof a ensiegne pour cette classe aujourd'hui") {
        window.alert("Erreur: Prof a déjà enseigné pour cette classe aujourd'hui");
      }
      else if(response === "prof n'est pas disponible"){
        window.alert("Erreur:prof n'est pas disponible")
      }

      else if (response === "ce classe n'est pas disponible dans cette heure") {
        window.alert("Erreur: Ce classe n'est pas disponible dans cette heure");
      }
      else if(response === "salle n'est pas dispo"){
        window.alert("Erreur:salle n'est pas disponible")
      }
      
      
      else {
        console.error("Réponse inattendue du backend:", response);
      }
    });
  }
  
}
