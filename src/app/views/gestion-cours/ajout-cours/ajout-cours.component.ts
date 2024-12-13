import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONFIG } from 'src/environement/environment';
import { ClasseService } from '../../gestion-classe/classe.service';
import { EmploiService } from '../../gestion-emploi/emploi.service';
import { MatiereService } from '../../gestion-matiere/matiere.service';
import { SalleService } from '../../gestion-salle/salle.service';
import { UserService } from '../../gestion-utilisateur/userservice';

@Component({
  selector: 'app-ajout-cours',
  templateUrl: './ajout-cours.component.html',
  styleUrls: ['./ajout-cours.component.scss']
})
export class AjoutCoursComponent {
  courform!: FormGroup;
  isEleveSelected = false;
  isEleveSelected2 = false;
  allclasse:any ;
  selectedFile!:File;

  constructor(private router: Router,private Service :EmploiService,private classeservice:ClasseService,
    private salleservice:SalleService,private http:HttpClient
  ) { }
  ngOnInit(): void {
    this.courform = new FormGroup({
      nomcour: new FormControl("", [Validators.required]),
      nomclasse: new FormControl("", [Validators.required])
    });
    this.classeservice.allclasse().subscribe((res)=>{
    this.allclasse=res ;
    })
  }

  public onFileChanged(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      console.log("Fichier sélectionné :", this.selectedFile);
    } else {
      window.alert("Aucun fichier sélectionné.");
    }
  }
  
  ajouter() {
    if (!this.courform.valid || !this.selectedFile) {
      window.alert("Veuillez remplir tous les champs obligatoires et sélectionner un fichier.");
      return;
    }
  
    const uploadImageData = new FormData();
    uploadImageData.append('fichier', this.selectedFile, this.selectedFile.name);
  
    const user = JSON.parse(localStorage.getItem('User') || '{}');
    let headers = new HttpHeaders().set("Authorization", 'Bearer ' + user.token);
  
    this.http.post(CONFIG.URL + "cours/ajouterRapport?nomcour=" +
      this.courform.value.nomcour + "&email=" +
      localStorage.getItem("email") + "&nomclasse=" +
      this.courform.value.nomclasse,
      uploadImageData,
      { observe: 'response'}
    ).subscribe({
      next: (res) => {
        if (!res.body) {
          window.alert("Vous avez déjà postulé à ce projet");
        } else {
          window.alert("Ajouté avec succès");
        }
      },
      error: (err) => {
        console.error(err);
        window.alert("Une erreur s'est produite lors de l'ajout.");
      }
    });
  }
              
    
}
