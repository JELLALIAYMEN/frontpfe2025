import { Component } from '@angular/core';
import {ModuleService} from "../../../../services/ModuleService";
 // Importer le service

@Component({
  selector: 'app-delete-module',
  templateUrl: './delete-module.component.html',
  styleUrls: ['./delete-module.component.scss']
})
export class DeleteModuleComponent {
  constructor(private moduleService:ModuleService ) {}
  deleteModule(id: number) {
    this.moduleService.deleteModule(id).subscribe(
      (response) => {
        console.log('Module supprimé avec succès', response);
      },
      (error) => {
        console.error('Erreur lors de la suppression du module', error);
      }
    );
  }


}


