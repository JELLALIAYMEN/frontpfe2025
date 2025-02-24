import { Component } from '@angular/core';
import { AddEmploiComponent } from '../add-emploi/add-emploi.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gestion-emploi-temps',
  templateUrl: './gestion-emploi-temps.component.html',
  styleUrls: ['./gestion-emploi-temps.component.scss']
})
export class GestionEmploiTempsComponent {

constructor(
    private dialog: MatDialog,
  ){}
  ajouterCalendrier(): void {
    this.dialog.open(AddEmploiComponent,
      {
        width:'600px'
      }
    );
  }
}
