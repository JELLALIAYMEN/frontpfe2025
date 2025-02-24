import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-eleve',
  templateUrl: './details-eleve.component.html',
  styleUrls: ['./details-eleve.component.scss']
})
export class DetailsEleveComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

}
