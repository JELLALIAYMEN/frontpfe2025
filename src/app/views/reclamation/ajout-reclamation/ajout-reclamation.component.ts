import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../gestion-utilisateur/userservice';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-ajout-reclamation',
  templateUrl: './ajout-reclamation.component.html',
  styleUrls: ['./ajout-reclamation.component.scss']
})
export class AjoutReclamationComponent {
  recform!: FormGroup;
  isEleveSelected = false;
  isEleveSelected2 = false;

  constructor(private router: Router,private Service :ReclamationService) { }
  ngOnInit(): void {
    this.recform = new FormGroup({
      date: new FormControl("", [Validators.required]),
      sujet: new FormControl("", [Validators.required]),
    });
  }



  ajouter(){
let rec = {
  date:this.recform.value.date,
  sujet:this.recform.value.sujet
}
this.Service.addrec(rec).subscribe((res)=>{
  window.alert("Réclamation envoyer avec succées")
  this.router.navigate(["Reclamation"]);


})
  }
}
