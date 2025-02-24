import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DisciplineService } from 'src/app/services/discipline.service';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.scss']
})
export class DisciplineComponent implements OnInit{
  id: any;
  fullName: string = 'John Doe'; // Nom de l'élève pour test
  eleve: any;
  disciplines: any[] = []; // Tableau des disciplines de l'élève
  disciplineVideos: { [key: string]: string } = {}; // Dictionnaire pour stocker les vidéos par discipline

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private disciplineService: DisciplineService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUser();
    this.getDisciplines();
  }

  getUser() {
    this.userService.getUserById(this.id).subscribe(
      response => {
        this.eleve = response;
        this.fullName = `${this.eleve.nom} ${this.eleve.prenom}`;
      }
    );
  }

  getDisciplines() {
    this.disciplineService.getDisciplinesByStudentId(this.id).subscribe(
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
        this.disciplineVideos[disciplineId] = url; // Stocker l'URL de la vidéo par discipline
      },
      (error) => {
        console.error(`Erreur lors du chargement de la vidéo pour la discipline ${disciplineId}:`, error);
      }
    );
  }
}
