import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {PrimeService} from '../prime.service';
import { Router } from '@angular/router';
import { JoueurService } from '../../gestion-joueur/joueur.service';
@Component({
  selector: 'app-add-prime',
  templateUrl: './add-prime.component.html',
  styleUrls: ['./add-prime.component.scss']
})
export class AddPrimeComponent {
  primeForm!: FormGroup;
  alljoueur :any ;
  constructor(private router: Router,private Service :PrimeService,private joueurservice : JoueurService) { }
  ngOnInit(): void {
    this.joueurservice.alljoueur().subscribe((res)=>{
      this.alljoueur=res ; 
    })
    this.primeForm = new FormGroup({
      nbrpartij: new FormControl("", [Validators.required]),
      nbrpartie: new FormControl("", [Validators.required]),
      nlicence: new FormControl("", [Validators.required]),
    });
  }
  ajouter(){
    let prime ={
      nbrpartij:this.primeForm.value.nbrpartij,
      nbrpartie:this.primeForm.value.nbrpartie,
    }

this.Service.addprime(this.primeForm.value,this.primeForm.value.nlicence).subscribe((res)=>{
    
    window.alert("Calculé Prime avec Succées")
    this.router.navigate(["gestion-prime"]);
  
    }  ) 
  }

}
