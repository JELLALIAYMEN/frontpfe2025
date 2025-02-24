import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.component.html',
  styleUrls: ['./mon-profil.component.scss']
})
export class MonProfilComponent implements OnInit{
  userName: string = ''; 
  userEmail: string = '';  
  userClasse: string = '';  
  userProfile: string = ''; 
  libelle: string = ''; 
  login: string = ''; 
  nom: string = ''; 
  prenom: string = ''; 
  matricule: string = '';

  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const email = localStorage.getItem('email'); // Récupérer l'email depuis le localStorage
    if (email) {
      this.userService.userbyemail(email).subscribe({
        next: (user) => {
          // Initialiser les variables avec les données de l'utilisateur
          this.userName = `${user.nom} ${user.prenom}`;
          this.userEmail = user.email;
          this.userClasse = user.classe ? user.classe.nomclasse : 'Non attribuée'; // Si la classe est présente, l'afficher
          this.userProfile = user.profil;
          this.libelle = user.profil;
          this.nom= user.nom;
          this.prenom= user.prenom;
          this.login=user.login;
          this.matricule = user.matricule;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération de l\'utilisateur :', err);
        }
      });
    }
  }
}
