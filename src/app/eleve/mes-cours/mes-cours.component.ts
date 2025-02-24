import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mes-cours',
  templateUrl: './mes-cours.component.html',
  styleUrls: ['./mes-cours.component.scss']
})
export class MesCoursComponent implements OnInit{
  courses: any[] = [];
  id: string = ''; 
  classeId!: number;

  constructor(private coursService: CoursService, private userService:UserService){}
  ngOnInit(): void {
    const email = localStorage.getItem('email'); 
    if (email) {
      this.userService.userbyemail(email).subscribe({
        next: (user) => {
          this.id = `${user.id}`;
          this.classeId = user.classe.id;
          console.log("this is my classe id", this.classeId);
          this.loadCourses(this.classeId);

        },
        error: (err) => {
          console.error('Erreur lors de la récupération de l\'utilisateur :', err);
        }
      });
    }
  }

  loadCourses(classeId:number) {
    this.coursService.getCoursByClasse(classeId).subscribe({
      next: (data) => {
        this.courses = data;
        console.log('Cours chargés avec succès', this.courses);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des cours', err);
      }
    });
  }
  openCourseFile(id: number) {
    this.coursService.getFichierCours(id).subscribe({
      next: (file: Blob) => {
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, '_blank');
      },
      error: (error) => {
        console.error('Erreur lors de l\'ouverture du fichier', error);
      }
    });
  }
}
