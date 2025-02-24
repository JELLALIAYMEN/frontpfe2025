import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddParentComponent } from './add-parent/add-parent.component';
import { ModifierParentComponent } from './modifier-parent/modifier-parent.component';
import { ConfirmationDeleteParentComponent } from './confirmation-delete-parent/confirmation-delete-parent.component';
import { DetailsParentComponent } from './details-parent/details-parent.component';
import { UserService } from 'src/app/services/user.service';
import { AssignerElevesComponent } from './assigner-eleves/assigner-eleves.component';

@Component({
  selector: 'app-gestion-parents',
  templateUrl: './gestion-parents.component.html',
  styleUrls: ['./gestion-parents.component.scss']
})
export class GestionParentsComponent implements OnInit{
  users: any[] = [];
  constructor(private dialog: MatDialog, private userService:UserService){}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data.filter((user:any) => user.profil === 'parent');
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des enseignants:', err);
      }
    });
  }
  openAddparent(){
    const dialogRef = this.dialog.open(AddParentComponent, {
      width: '600px' 
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("parent ajouté!");
        window.location.reload();
      } else {
        console.log("Ajout parent annulée");
      }
    });
  }

  detailsParent(user:any){
    this.dialog.open(DetailsParentComponent, {
      width: '600px',
      data: user
    })
  }
  modifierParent(user: any){
    const dialogRef = this.dialog.open(ModifierParentComponent, {
      width: '600px',
      data: user
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("parent modifé!");
        window.location.reload();
      } else {
        console.log("Modification annulée");
      }
    });
  }
  openConfirmationDialog(id: any): void{
    const dialogRef = this.dialog.open(ConfirmationDeleteParentComponent, {
      width: '600px',
      data: { id: id } 
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Parfent supprimé!");
        // Dynamically update the list of users without reloading the page
        window.location.reload();
      } else {
        console.log("Suppression parent annulée");
      }
    });
  }
  assignerEleve(user:any){
    this.dialog.open(AssignerElevesComponent, {
      width: '500px',
      data: user
    });
  }
}
