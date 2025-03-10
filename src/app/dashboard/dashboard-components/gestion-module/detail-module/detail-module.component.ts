import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModuleService } from 'src/app/services/ModuleService';
 // Assurez-vous d'importer le bon service

@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.component.html',
  styleUrls: ['./detail-module.component.scss']
})
export class DetailModuleComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
