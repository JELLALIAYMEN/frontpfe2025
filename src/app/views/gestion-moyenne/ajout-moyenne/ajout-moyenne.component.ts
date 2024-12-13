import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseService } from '../../gestion-classe/classe.service';
import { MatiereService } from '../../gestion-matiere/matiere.service';
import { NoteService } from '../../gestion-note/noe.service';
import { SalleService } from '../../gestion-salle/salle.service';
import { UserService } from '../../gestion-utilisateur/userservice';

@Component({
  selector: 'app-ajout-moyenne',
  templateUrl: './ajout-moyenne.component.html',
  styleUrls: ['./ajout-moyenne.component.scss']
})
export class AjoutMoyenneComponent {
  moyform!: FormGroup;
  isEleveSelected = false;
  isEleveSelected2 = false;
  allclasse:any ;
  salle:any ;
  alluser:any  ; 
  filteredUsers:any ;
  allmat:any ;
  constructor(private router: Router,private Service :NoteService,private classeservice:ClasseService,
    private salleservice:SalleService,private servicematiere:MatiereService,private serviceuser:UserService 
  ) { }
  ngOnInit(): void {
    this.moyform = new FormGroup({
      emailel: new FormControl("", [Validators.required]),
      moyenneType: new FormControl("", [Validators.required]),
      trimestre: new FormControl("", [Validators.required]),
      moyennevalue: new FormControl("", [Validators.required]),
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
      this.filteredUsers = this.alluser.filter((user: any) => user.profil === 'Eleve');
console.log(this.filteredUsers)
    })
  }
  ajouter() {
    let e = {
      idel: this.moyform.value.emailel,
      moyenneType: this.moyform.value.moyenneType,
      moyennevalue: this.moyform.value.moyennevalue,
      trimestre: this.moyform.value.trimestre
    };
this.Service.saveMoyenne(e).subscribe((res)=>{
  window.alert("Ajout Moyenne avec succées")
})
  }
}
