import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseService } from '../../gestion-classe/classe.service';
import { CalendrierService } from '../calendrier.seervice';
import { MatiereService } from '../../gestion-matiere/matiere.service';
import { SalleService } from '../../gestion-salle/salle.service';
import { UserService } from '../../gestion-utilisateur/userservice';

@Component({
  selector: 'app-ajout-calendrier',
  templateUrl: './ajout-calendrier.component.html',
  styleUrls: ['./ajout-calendrier.component.scss']
})
export class AjoutCalendrierComponent {
  calendrierform!: FormGroup;
  isEleveSelected = false;
  isEleveSelected2 = false;
  allclasse:any ;
  salle:any ;
  alluser:any  ; 
  filteredUsers:any ;
  allmat:any ;
  constructor(private router: Router,private Service :CalendrierService,private classeservice:ClasseService,
    private salleservice:SalleService,private servicematiere:MatiereService,private serviceuser:UserService 
  ) { }
  ngOnInit(): void {
    this.calendrierform = new FormGroup({
      nomjour: new FormControl("", [Validators.required]),
      periode: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      nomclasse: new FormControl("", [Validators.required]),
      nomdesalle: new FormControl("", [Validators.required]),
      nommat: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      typecalendrier: new FormControl("", [Validators.required]),
      
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
      date: this.calendrierform.value.date,
      nomjour: this.calendrierform.value.nomjour,
      periode: this.calendrierform.value.periode,
    };
    console.log(this.calendrierform.value.typecalendrier)
  
    this.Service.creer(
      e,
      this.calendrierform.value.email,
      this.calendrierform.value.nomdesalle,
      this.calendrierform.value.nommat,
      this.calendrierform.value.nomclasse,

      this.calendrierform.value.typecalendrier,

    ).subscribe((res) => {
      const response = res.trim(); 
  
  
      if (response === "true") {
        window.alert("Calendrier Créé avec succès");
                this.router.navigate(["gestion-calendrier"]);

      } else if (response === "cette classe a une devoir") {
        window.alert("Erreur: cette classe a une devoir");
      }
      else if(response === "ce professeur a un devoir cette periode"){
        window.alert("ce professeur a un devoir cette periode")
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
