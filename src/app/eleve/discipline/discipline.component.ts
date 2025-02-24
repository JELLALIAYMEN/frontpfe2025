import { Component, OnInit } from '@angular/core';
import { DisciplineService } from 'src/app/services/discipline.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.scss']
})
export class DisciplineComponent implements OnInit {
  userId: any;
  eleve: any;
  fullName: any;
  disciplines: any[] = []; // Tableau des disciplines de l'élève
  disciplineVideos: { [key: string]: string } = {}; // Dictionnaire pour stocker les vidéos par discipline
  email: string | null = localStorage.getItem('email'); // Récupérer l'email depuis le localStorage

  constructor(
    private userService: UserService,
    private disciplineService: DisciplineService
  ) {}

  ngOnInit(): void {
    if (this.email) {
      this.getUser();
    } else {
      console.error('Email non trouvé dans le localStorage');
    }
  }

  getUser() {
    this.userService.userbyemail(this.email!).subscribe(
      (response) => {
        this.eleve = response;
        this.userId = this.eleve.id;
        this.fullName = `${this.eleve.nom} ${this.eleve.prenom}`;
        console.log('Élève récupéré:', this.userId);
        this.getDisciplines(); // Récupérer les disciplines après avoir récupéré l'élève
      },
      (error) => {
        console.error("Erreur lors de la récupération de l'élève:", error);
      }
    );
  }

  getDisciplines() {
    if (!this.userId) {
      console.error('ID de l\'élève non disponible');
      return;
    }
    this.disciplineService.getDisciplinesByStudentId(this.userId).subscribe(
      (disciplines) => {
        this.disciplines = disciplines;
        // Pour chaque discipline, récupérez la vidéo correspondante
        this.disciplines.forEach(discipline => {
          this.getDisciplineVideo(discipline.id); // Appel pour récupérer la vidéo de la discipline
        });
      },
      (error) => {
        console.error('Erreur lors de la récupération des disciplines:', error);
      }
    );
  }

  getDisciplineVideo(disciplineId: number) {
    this.disciplineService.getDisciplineViode(disciplineId).subscribe(
      (url: string) => {
        if (url) {
          this.disciplineVideos[disciplineId] = url; // Stocker l'URL de la vidéo par discipline
        } else {
          console.warn(`Aucune vidéo disponible pour la discipline ${disciplineId}`);
        }
      },
      (error) => {
        console.error(`Erreur lors du chargement de la vidéo pour la discipline ${disciplineId}:`, error);
      }
    );
  }
}
