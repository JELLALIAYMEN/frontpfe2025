import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembreService } from '../membre.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier-membre',
  templateUrl: './modifier-membre.component.html',
  styleUrls: ['./modifier-membre.component.scss']
})
export class ModifierMembreComponent {
 id:any ;
 membre : any ;
 membreForm!: FormGroup;

 constructor(private route :ActivatedRoute,private router: Router,private  service : MembreService){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.service.membrebyid(this.id).subscribe((res)=>{
      this.membre=res ; 
      console.log(this.membre,"--")
    })
    
      this.membreForm = new FormGroup({
        nom: new FormControl("", [Validators.required]),
        adresse: new FormControl("", [Validators.required]),
        codepostale: new FormControl("", [Validators.required]),
        datedenaissance: new FormControl("", [Validators.required]),
        poste: new FormControl("", [Validators.required, Validators.email]),
        type: new FormControl("", [Validators.required]),
        ville :new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required]),
        tel: new FormControl("", [Validators.required]),
      });
    }
    modifier(){
      let membre = {
        nom:this.membreForm.value.nom,
        adresse:this.membreForm.value.adresse,
        codepostale:this.membreForm.value.codepostale,
        datedenaissance:this.membreForm.value.datedenaissance,
        poste:this.membreForm.value.poste,
        type:this.membreForm.value.type,
        ville:this.membreForm.value.ville,
        email:this.membreForm.value.email,
        tel:this.membreForm.value.tel,
        id:this.id,
        date:this.membre.date
      }
      console.log(membre)
      this.service.modifiermembre(membre).subscribe((res)=>{
        window.alert("Modifier Membre avec Succées")
        this.router.navigate(["gestion-membre"]);
      })
    }
  }

