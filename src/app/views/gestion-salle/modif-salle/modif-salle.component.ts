import { Component } from '@angular/core';
import { SalleService } from '../salle.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from '../../departement/departement.service';

@Component({
  selector: 'app-modif-salle',
  templateUrl: './modif-salle.component.html',
  styleUrls: ['./modif-salle.component.scss']
})
export class ModifSalleComponent {
  id: string | null = null;
  user: any = {}; // Votre modèle utilisateur (ajustez si nécessaire)
  salleForm!: FormGroup;
  isEleveSelected = false;
  dep:any ;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SalleService,
    private depservice:DepartementService
  ) {}

  ngOnInit(): void {
    this.depservice.alldepartement().subscribe((res)=>{
      this.dep=res ; 
    })
    this.id = this.route.snapshot.params['id'];

    // Initialisation du formulaire avec des valeurs par défaut
    this.salleForm = new FormGroup({
      nomdesalle: new FormControl('', [Validators.required]),
      departement: new FormControl('', [Validators.required]),
    
    });

    // Récupération des données utilisateur et mise à jour du formulaire
    if (this.id) {
      this.service.affichagebyid(this.id).subscribe((res) => {
        this.user = res;
        console.log(this.user)

        // Mise à jour des valeurs dans le formulaire
        this.salleForm.patchValue({
          nomdesalle: this.user.nomdesalle,
          departement: this.user.departement.nom,
     });
      });
    }
  }


  modifier(){
    let salle = {
      nomdesalle: this.salleForm.value.nomdesalle,
      id:this.id
    }
   this.service.modif(salle,this.salleForm.value.departement).subscribe((res)=>{
      console.log(res)
        window.alert("Modification Salle avec Succées")
        this.router.navigate(["gestion-salle"]);
    })
  
  }
}
