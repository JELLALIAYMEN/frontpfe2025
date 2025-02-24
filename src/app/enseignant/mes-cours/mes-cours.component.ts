import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursService } from 'src/app/services/cours.service';
import { AddCoursComponent } from '../add-cours/add-cours.component';
interface cards {
  image: string;
  btn: string;
}

@Component({
  selector: 'app-mes-cours',
  templateUrl: './mes-cours.component.html',
  styleUrls: ['./mes-cours.component.scss']
})
export class MesCoursComponent  implements OnInit {
  courses: any[] = [];
  email = localStorage.getItem('email');

  constructor(
    private courseService: CoursService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getAllCours(this.email!).subscribe({
      next: (response) => {
        this.courses = response;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des cours', error);
      }
    });
  }

  openAddCours() {
    const dialogRef = this.dialog.open(AddCoursComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Cours ajouté!');
        window.location.reload();
      } else {
        console.log('Ajout cours annulée');
      }
    });
  }
  openCourseFile(id: number) {
    this.courseService.getFichierCours(id).subscribe({
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