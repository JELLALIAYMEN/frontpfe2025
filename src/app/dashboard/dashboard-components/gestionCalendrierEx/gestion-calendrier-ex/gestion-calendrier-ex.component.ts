import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendrierExService } from 'src/app/services/calendrier-ex.service';
import { AddCalendrierExComponent } from '../add-calendrier-ex/add-calendrier-ex.component';

@Component({
  selector: 'app-gestion-calendrier-ex',
  templateUrl: './gestion-calendrier-ex.component.html',
  styleUrls: ['./gestion-calendrier-ex.component.scss']
})
export class GestionCalendrierExComponent {
  constructor(
    private dialog: MatDialog,
    private calendrierExSer: CalendrierExService 
  ){}
  ajouterCalendrier(): void {
    this.dialog.open(AddCalendrierExComponent,
      {
        width:'600px'
      }
    );
  }
}
