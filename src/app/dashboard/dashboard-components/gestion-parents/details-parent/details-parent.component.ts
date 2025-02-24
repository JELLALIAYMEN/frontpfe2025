import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-parent',
  templateUrl: './details-parent.component.html',
  styleUrls: ['./details-parent.component.scss']
})
export class DetailsParentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

}
