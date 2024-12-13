import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseService } from '../../gestion-classe/classe.service';
import { EmploiService } from '../../gestion-emploi/emploi.service';
import { MatiereService } from '../../gestion-matiere/matiere.service';
import { SalleService } from '../../gestion-salle/salle.service';
import { UserService } from '../../gestion-utilisateur/userservice';
import{PaiemenyService} from '../paiement.service'
@Component({
  selector: 'app-ajout-paiement',
  templateUrl: './ajout-paiement.component.html',
  styleUrls: ['./ajout-paiement.component.scss']
})
export class AjoutPaiementComponent {
  payform!: FormGroup;
  isEleveSelected = false;
  isEleveSelected2 = false;
  allclasse:any ;
  salle:any ;
  alluser:any  ; 
  filteredUsers:any ;
  allmat:any ;
  constructor(private router: Router,private Service :PaiemenyService,private classeservice:ClasseService,
    private salleservice:SalleService,private servicematiere:MatiereService,private serviceuser:UserService 
  ) { }
  ngOnInit(): void {
    this.payform = new FormGroup({
      typepay: new FormControl("", [Validators.required]),
      amount: new FormControl("", [Validators.required]),
      statuspay: new FormControl("", [Validators.required]),
      modepay: new FormControl("", [Validators.required]),
      modalitePay: new FormControl("", [Validators.required]),
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
      this.filteredUsers = this.alluser.filter((user: any) => user.profil === 'Eleve');

    })
  }


  onProfilChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    
    this.isEleveSelected = selectedValue === 'Teacher';
    this.isEleveSelected2 = selectedValue === 'Eleve';

  }
  ajouter() {
    let p={
      typepay :this.payform.value.typepay,
      amount : this.payform.value.amount,
      statuspay: this.payform.value.statuspay,
       modepay:this.payform.value.modepay,
        modalitePay:this.payform.value.modalitePay
    }
  this.Service.addpay(p,this.payform.value.email).subscribe((res)=>{
    window.alert("payement effectuer avec succées")
  })
  }

}
