import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseService } from '../gestion-classe/classe.service';
import { EmploiService } from '../gestion-emploi/emploi.service';
import { MatiereService } from '../gestion-matiere/matiere.service';
import { SalleService } from '../gestion-salle/salle.service';
import { UserService } from '../gestion-utilisateur/userservice';
import{NoteService} from '../gestion-note/noe.service'
@Component({
  selector: 'app-gestion-note',
  templateUrl: './gestion-note.component.html',
  styleUrls: ['./gestion-note.component.scss']
})
export class GestionNoteComponent {
  notform!: FormGroup;
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
    this.notform = new FormGroup({
      emailel: new FormControl("", [Validators.required]),
      typeNote: new FormControl("", [Validators.required]),
      trimestre: new FormControl("", [Validators.required]),
      coff: new FormControl("", [Validators.required]),
      nommat: new FormControl("", [Validators.required]),
      noteValue: new FormControl("", [Validators.required]),
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
      idmatiere: this.notform.value.nommat,
      idel: this.notform.value.emailel,
      typeNote: this.notform.value.typeNote,
      noteValue: this.notform.value.noteValue,
      trimestre: this.notform.value.trimestre,
      coff:this.notform.value.coff
    };
this.Service.creenote(e).subscribe((res)=>{
  window.alert("Ajout Note avec succées")
})
  }
  

}
