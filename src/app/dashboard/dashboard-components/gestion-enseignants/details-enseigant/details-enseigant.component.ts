import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-enseigant',
  templateUrl: './details-enseigant.component.html',
  styleUrls: ['./details-enseigant.component.scss']
})
export class DetailsEnseigantComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}
