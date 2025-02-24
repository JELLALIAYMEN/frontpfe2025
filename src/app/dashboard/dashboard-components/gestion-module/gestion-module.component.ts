import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { AddModuleComponent } from './add-module/add-module.component';
import { ModuleService } from 'src/app/services/ModuleService';

@Component({
  selector: 'app-gestion-module',
  templateUrl: './gestion-module.component.html',
  styleUrls: ['./gestion-module.component.scss']
})
export class GestionModuleComponent {
allmodule:any ;
 constructor(private dialog: MatDialog, private Service:ModuleService){}
ngOnInit(){
  const mat = localStorage.getItem("matricule")
  this.Service.getModulesByMatricule().subscribe((res)=>{
this.allmodule=res; ; 
    console.log(res)
  })
}

 openAddmodule(){
    const dialogRef = this.dialog.open(AddModuleComponent, {
      width: '600px' 
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Module ajouté!");
        window.location.reload();
      } else {
        console.log("Ajout Module annulée");
      }
    });
  }


}
