import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClassComponent } from './add-class/add-class.component';
import { DetailsClassComponent } from './details-class/details-class.component';
import { ClasseService } from 'src/app/services/classe.service';
interface cards {
  image: string;
  btn: string;
}
@Component({
  selector: 'app-gestion-class',
  templateUrl: './gestion-class.component.html',
  styleUrls: ['./gestion-class.component.scss']
})

export class GestionClassComponent implements OnInit {
  classes: any[] = []

  constructor(private dialog: MatDialog, private classService: ClasseService) { }

  ngOnInit(): void {
      this.classService.allClasses().subscribe(
        (data: any) => {
          this.classes = data; // Remplir la liste des classes
        },
        (error) => {
          console.error('Erreur lors de la récupération des classes:', error);
        });
  }

  openAddClass(){
    this.dialog.open(AddClassComponent ,{
      width: '600px' 
    })
  }
  openClassDetails(){
    this.dialog.open(DetailsClassComponent ,{
      width: '500px' 
    })
  }
  cards: cards [] = [
    {
      image: "assets/images/classes.png",
      btn: "btn-danger",
    },

  ]

}
