import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{DisciplineService} from '../discipline.service';
import { Router } from '@angular/router';
import { UserService } from '../../gestion-utilisateur/userservice';
@Component({
  selector: 'app-ajout-discipline',
  templateUrl: './ajout-discipline.component.html',
  styleUrls: ['./ajout-discipline.component.scss']
})
export class AjoutDisciplineComponent {
  disciform!:FormGroup;
  
  alluser:any  ; 
  filteredUsers:any ;
  constructor(private router: Router,private Service :DisciplineService,private serviceuser:UserService) { }
  ngOnInit(): void {
    this.disciform = new FormGroup({
      typeDisc: new FormControl("", [Validators.required]),
      eleve: new FormControl("", [Validators.required]),
    });


    this.serviceuser.alluser().subscribe((res)=>{
      this.alluser=res ;
      this.filteredUsers = this.alluser.filter((user: any) => user.profil === 'Eleve');
console.log(this.filteredUsers)
    })
  }


  ajouter(){
 this.Service.adddiscipline(this.disciform.value.typeDisc,this.disciform.value.eleve).subscribe((res)=>{
  window.alert("ajout discipline avec succées ")
 })
  }
}
