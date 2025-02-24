import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-reclamation',
  templateUrl: './details-reclamation.component.html',
  styleUrls: ['./details-reclamation.component.scss']
})
export class DetailsReclamationComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

}
